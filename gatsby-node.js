// todo the 'links' data that we get back from the response is not an array. We need to query the data before and map through all of them for a more responsive approach. -ES

const axios = require('axios')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  //todo put bizID inside of gatsby-config and pull it from there via option parameters
  const bizID = 'bzn-yO3xgUsKQCS7GWg0Q2ewbQ'
  const { createNode } = actions

  async function getMetaData(id) {
    const data = await axios.get(
      `https://data.prod.gonation.com/profile/getname/?profile_id=${id}`
    )
    return data
  }

  const data = await getMetaData(bizID)

  const nodeContent = JSON.stringify(data.data)

  const nodeMeta = {
    id: createNodeId(`metaData-${bizID}`),
    parent: null,
    children: [],
    internal: {
      type: `SiteMetaData`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(data.data),
    },
  }

  const node = Object.assign({}, data, nodeMeta)
  createNode(node)
}
