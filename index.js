const core = require('@actions/core');
const github = require('@actions/github');

try {
  const package = core.getInput('package');
  const owner = core.getInput('owner');
  const token = core.getInput('owner');

  const octokit = github.getOctokit(token);
  const response = await octokit.request(`GET /${owner}/packages/container/${package}/versions`, { per_page: 100 });
  for(version of response.data) {
      if (version.metadata.container.tags.length == 0) {
          console.log(`delete ${version.id}`)
          const deleteResponse = await octokit.request(`DELETE /${owner}/packages/container/${package}/versions/${version.id}`, { });
          console.log(`status ${deleteResponse.status}`)
      }
  }
} catch (error) {
  core.setFailed(error.message);
}
