// Sometimes its useful to be able to run a one-off script to test something out
// The actual script is looking for an experiment.ts file, which I generally exclude from the git history
function handleExperiment() {
  console.log("Experiment Ran");
}

void handleExperiment();
