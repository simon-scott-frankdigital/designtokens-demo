const initWrapper = (() => {
  const contentTypes = require('./model-content-types').contentTypes
  require('dotenv').config()
  const envfile = require('envfile')
  const fs = require('fs')
  const contentful = require('contentful-management')

  const contentfulCredentials = {}

  const init = async () => {
    try {
      await projectSetup()
      createClient()
      await findSpace()

      await createSpace()
      writeToEnv('CONTENTFUL_SPACE_ID', contentfulCredentials.space.sys.id)
      await createContentfulDeliveryToken()
      writeToEnv(
        'CONTENTFUL_DELIVERY_TOKEN',
        contentfulCredentials.contentfulDeliveryToken.accessToken
      )
      await getEnvironment()

      await createContentTypes()
      await createEntries()
      await linkEntries()
    } catch (error) {
      console.log(
        `Initialization of the boilerplate failed with error: '${error}'`
      )
    }
  }

  const projectSetup = async () => {
    const readline = require('readline')
    const envfile = require('envfile')
    const fs = require('fs')
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    const updatePackageJSON = (projectName) => {
      const package = require('./package.json')
      package.name = projectName
      fs.writeFileSync('./package.json', JSON.stringify(package, null, 2))
    }

    const updateEnv = (key, value) => {
      const sourcePath = '.env'
      let parsedFile = envfile.parseFileSync(sourcePath)
      parsedFile[key] = value

      fs.writeFileSync('./.env', envfile.stringifySync(parsedFile))
    }

    rl.question('Enter Contentful Access Token:', (token) => {
      updateEnv('CONTENTFUL_ACCESS_TOKEN', token)
      contentfulCredentials.accessToken = token
      rl.question('Enter Project Name: ', (projectName) => {
        contentfulCredentials.projectName = projectName = projectName
          .replace(/\s/g, '-')
          .toLowerCase()
        updatePackageJSON(projectName)
        rl.close()
      })
    })
    for await (const line of rl) {
    }
    rl.on('close', function () {
      process.exit(0)
    })
  }
  const createClient = () => {
    contentfulCredentials.client = contentful.createClient({
      headers: { 'X-Contentful-Organization': '4vHDXROqt3fekIWZ4lxbyX' },
      accessToken: contentfulCredentials.accessToken,
    })
  }
  const writeToEnv = (key, value) => {
    // check version for parseFileSync
    const sourcePath = '.env'
    let parsedFile = envfile.parseFileSync(sourcePath)
    parsedFile[key] = value

    fs.writeFileSync('./.env', envfile.stringifySync(parsedFile))
  }

  const createSpace = async () => {
    console.log('\u001b[1;36m CREATING CONTENTFUL SPACE \u001b[0m')

    try {
      contentfulCredentials.space =
        await contentfulCredentials.client.createSpace({
          name: contentfulCredentials.projectName || 'Boilerplate app',
        })
      console.log('\u001b[1;32m Done\u001b[0m')
    } catch (error) {
      console.log(error)
    }
  }
  const createContentfulDeliveryToken = async () => {
    console.log('\u001b[1;36m CREATING DELIVERY TOKEN  \u001b[0m')
    try {
      contentfulCredentials.contentfulDeliveryToken =
        await contentfulCredentials.space.createApiKey({
          name: 'app generated delivery token',
        })
      console.log('\u001b[1;32m Done\u001b[0m')
    } catch (error) {
      console.log(error)
    }
  }

  const getEnvironment = async () => {
    try {
      contentfulCredentials.environment =
        await contentfulCredentials.space.getEnvironment('master')
    } catch (error) {
      console.log(error)
    }
  }
  const createContentTypes = async () => {
    console.log('\u001b[1;36m CREATING CONTENT TYPES   \u001b[0m')
    try {
      for (const type of Object.keys(contentTypes)) {
        await contentfulCredentials.environment
          .createContentType({
            name: type,
            displayField: 'title',
            fields: [...contentTypes[type].fields],
          })
          .then((res) => {
            contentTypes[type].id = res.sys.id
            console.log(
              `${contentTypes[type].name} \u001b[1;32m created \u001b[0m`
            )

            res.publish().catch((err) => console.log(err))
          })
      }
      console.log('\u001b[1;32m Done\u001b[0m')
    } catch (error) {
      console.log(error)
    }
  }

  const createEntries = async () => {
    console.log('\u001b[1;36m  CREATING CONTENT ENTRIES   \u001b[0m')
    try {
      for (const type of Object.keys(contentTypes)) {
        entries = Object.assign({}, { ...contentTypes[type].entries })

        for (const entry of Object.keys(entries)) {
          let fields = Object.assign({}, { ...entries[entry] })
          const body = getEntryFields(fields)
          delete body.fields.linkTo

          await contentfulCredentials.environment
            .createEntryWithId(contentTypes[type].id, fields.id, {
              fields: {
                ...body.fields,
              },
            })
            .then((res) =>
              res.publish().then((res) => {
                console.log(`${res.sys.id} \u001b[1;32m created \u001b[0m`)

                'linkTo' in entries[entry] &&
                  refactorEntriesToRecieveLinks(
                    res.sys.id,
                    entries[entry].linkTo
                  )
              })
            )

            .catch((err) => console.log(err))
        }
      }
      console.log('\u001b[1;32m Done\u001b[0m')
    } catch (error) {
      console.log(error)
    }
  }
  let entries
  let entriesToReceiveLinks = {}

  const refactorEntriesToRecieveLinks = (entryToBeLinked, linkData) => {
    /// step 1   create all entries to receive links

    const linkDataArray = Object.keys(linkData)
    linkDataArray.forEach((key, i) => {
      if (i % 2 === 0) {
        const entryToReceiveLink = linkData[key]
        const fieldName = linkData[linkDataArray[i + 1]]

        /// step 2, push all links to entry object
        const linkObject = {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: entryToBeLinked,
          },
        }

        if (entriesToReceiveLinks[entryToReceiveLink]) {
          entriesToReceiveLinks[entryToReceiveLink][fieldName].push(linkObject)
        } else {
          entriesToReceiveLinks = {
            ...entriesToReceiveLinks,
            [entryToReceiveLink]: {
              [fieldName]: [linkObject],
            },
          }
        }
      }
    })
  }
  const linkEntries = async () => {
    console.log('\u001b[1;36m LINKING ENTRIES \u001b[0m')

    try {
      for (const entryToReceiveLink of Object.keys(entriesToReceiveLinks)) {
        for (const fieldToBeUpdated of Object.keys(
          entriesToReceiveLinks[entryToReceiveLink]
        )) {
          await contentfulCredentials.environment
            .getEntry(entryToReceiveLink)
            .then((entry) => {
              console.log(
                `${entryToReceiveLink}\u001b[1;32m updated with \u001b[0m ${entriesToReceiveLinks[
                  entryToReceiveLink
                ][fieldToBeUpdated].map((el) => el.sys.id)}`
              )

              entry.fields[fieldToBeUpdated] = {
                'en-US':
                  entriesToReceiveLinks[entryToReceiveLink][fieldToBeUpdated],
              }
              return entry.update()
            })
            .then((entry) => entry.publish())
            .catch(console.error)
        }
      }
    } catch (error) {}
  }

  const findSpace = async () => {
    const response = await contentfulCredentials.client.getSpaces()
    const space = response.items.find(
      (space) => space.name === contentfulCredentials.projectName
    )
    if (space) {
      throw `Space with name \u001b[1;36m${contentfulCredentials.projectName}\u001b[0m" already exists on your account!`
    }
  }

  const getEntryFields = (fields) => {
    let body = {
      fields: {},
    }
    Object.keys(fields).forEach((field) => {
      field !== 'id' &&
        (body = {
          fields: {
            ...body.fields,
            [field]: { 'en-US': fields[field] },
          },
        })
    })
    return body
  }
  init()
})()
