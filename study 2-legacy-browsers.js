/**************** 
 * Study 2 *
 ****************/


// store info about the experiment session:
let expName = 'study 2';  // from the Builder filename that created this script
let expInfo = {
    'id_number': '',
    'condition': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([-1, -1, -1]),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const intro_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(intro_loopLoopBegin(intro_loopLoopScheduler));
flowScheduler.add(intro_loopLoopScheduler);
flowScheduler.add(intro_loopLoopEnd);


const task_instruction_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(task_instruction_loopLoopBegin(task_instruction_loopLoopScheduler));
flowScheduler.add(task_instruction_loopLoopScheduler);
flowScheduler.add(task_instruction_loopLoopEnd);


const img_gen_trials_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(img_gen_trials_loopLoopBegin(img_gen_trials_loopLoopScheduler));
flowScheduler.add(img_gen_trials_loopLoopScheduler);
flowScheduler.add(img_gen_trials_loopLoopEnd);


flowScheduler.add(individual_diffs_introRoutineBegin());
flowScheduler.add(individual_diffs_introRoutineEachFrame());
flowScheduler.add(individual_diffs_introRoutineEnd());
const individual_diffs_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(individual_diffs_loopLoopBegin(individual_diffs_loopLoopScheduler));
flowScheduler.add(individual_diffs_loopLoopScheduler);
flowScheduler.add(individual_diffs_loopLoopEnd);


flowScheduler.add(demo_introRoutineBegin());
flowScheduler.add(demo_introRoutineEachFrame());
flowScheduler.add(demo_introRoutineEnd());
flowScheduler.add(ageRoutineBegin());
flowScheduler.add(ageRoutineEachFrame());
flowScheduler.add(ageRoutineEnd());
flowScheduler.add(sexRoutineBegin());
flowScheduler.add(sexRoutineEachFrame());
flowScheduler.add(sexRoutineEnd());
flowScheduler.add(raceRoutineBegin());
flowScheduler.add(raceRoutineEachFrame());
flowScheduler.add(raceRoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'condition2.xlsx', 'path': 'condition2.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'individual_differences.xlsx', 'path': 'individual_differences.xlsx'},
    {'name': 'condition1.xlsx', 'path': 'condition1.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'condition2.xlsx', 'path': 'condition2.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'individual_differences.xlsx', 'path': 'individual_differences.xlsx'},
    {'name': 'condition1.xlsx', 'path': 'condition1.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'condition2.xlsx', 'path': 'condition2.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'individual_differences.xlsx', 'path': 'individual_differences.xlsx'},
    {'name': 'condition1.xlsx', 'path': 'condition1.xlsx'},
    {'name': 'stimuli/rcic_base_1_00001_inv.png', 'path': 'stimuli/rcic_base_1_00001_inv.png'},
    {'name': 'stimuli/rcic_base_1_00001_ori.png', 'path': 'stimuli/rcic_base_1_00001_ori.png'},
    {'name': 'stimuli/rcic_base_1_00002_inv.png', 'path': 'stimuli/rcic_base_1_00002_inv.png'},
    {'name': 'stimuli/rcic_base_1_00002_ori.png', 'path': 'stimuli/rcic_base_1_00002_ori.png'},
    {'name': 'stimuli/rcic_base_1_00003_inv.png', 'path': 'stimuli/rcic_base_1_00003_inv.png'},
    {'name': 'stimuli/rcic_base_1_00003_ori.png', 'path': 'stimuli/rcic_base_1_00003_ori.png'},
    {'name': 'stimuli/rcic_base_1_00004_inv.png', 'path': 'stimuli/rcic_base_1_00004_inv.png'},
    {'name': 'stimuli/rcic_base_1_00004_ori.png', 'path': 'stimuli/rcic_base_1_00004_ori.png'},
    {'name': 'stimuli/rcic_base_1_00005_inv.png', 'path': 'stimuli/rcic_base_1_00005_inv.png'},
    {'name': 'stimuli/rcic_base_1_00005_ori.png', 'path': 'stimuli/rcic_base_1_00005_ori.png'},
    {'name': 'stimuli/rcic_base_1_00006_inv.png', 'path': 'stimuli/rcic_base_1_00006_inv.png'},
    {'name': 'stimuli/rcic_base_1_00006_ori.png', 'path': 'stimuli/rcic_base_1_00006_ori.png'},
    {'name': 'stimuli/rcic_base_1_00007_inv.png', 'path': 'stimuli/rcic_base_1_00007_inv.png'},
    {'name': 'stimuli/rcic_base_1_00007_ori.png', 'path': 'stimuli/rcic_base_1_00007_ori.png'},
    {'name': 'stimuli/rcic_base_1_00008_inv.png', 'path': 'stimuli/rcic_base_1_00008_inv.png'},
    {'name': 'stimuli/rcic_base_1_00008_ori.png', 'path': 'stimuli/rcic_base_1_00008_ori.png'},
    {'name': 'stimuli/rcic_base_1_00009_inv.png', 'path': 'stimuli/rcic_base_1_00009_inv.png'},
    {'name': 'stimuli/rcic_base_1_00009_ori.png', 'path': 'stimuli/rcic_base_1_00009_ori.png'},
    {'name': 'stimuli/rcic_base_1_00010_inv.png', 'path': 'stimuli/rcic_base_1_00010_inv.png'},
    {'name': 'stimuli/rcic_base_1_00010_ori.png', 'path': 'stimuli/rcic_base_1_00010_ori.png'},
    {'name': 'stimuli/rcic_base_1_00011_inv.png', 'path': 'stimuli/rcic_base_1_00011_inv.png'},
    {'name': 'stimuli/rcic_base_1_00011_ori.png', 'path': 'stimuli/rcic_base_1_00011_ori.png'},
    {'name': 'stimuli/rcic_base_1_00012_inv.png', 'path': 'stimuli/rcic_base_1_00012_inv.png'},
    {'name': 'stimuli/rcic_base_1_00012_ori.png', 'path': 'stimuli/rcic_base_1_00012_ori.png'},
    {'name': 'stimuli/rcic_base_1_00013_inv.png', 'path': 'stimuli/rcic_base_1_00013_inv.png'},
    {'name': 'stimuli/rcic_base_1_00013_ori.png', 'path': 'stimuli/rcic_base_1_00013_ori.png'},
    {'name': 'stimuli/rcic_base_1_00014_inv.png', 'path': 'stimuli/rcic_base_1_00014_inv.png'},
    {'name': 'stimuli/rcic_base_1_00014_ori.png', 'path': 'stimuli/rcic_base_1_00014_ori.png'},
    {'name': 'stimuli/rcic_base_1_00015_inv.png', 'path': 'stimuli/rcic_base_1_00015_inv.png'},
    {'name': 'stimuli/rcic_base_1_00015_ori.png', 'path': 'stimuli/rcic_base_1_00015_ori.png'},
    {'name': 'stimuli/rcic_base_1_00016_inv.png', 'path': 'stimuli/rcic_base_1_00016_inv.png'},
    {'name': 'stimuli/rcic_base_1_00016_ori.png', 'path': 'stimuli/rcic_base_1_00016_ori.png'},
    {'name': 'stimuli/rcic_base_1_00017_inv.png', 'path': 'stimuli/rcic_base_1_00017_inv.png'},
    {'name': 'stimuli/rcic_base_1_00017_ori.png', 'path': 'stimuli/rcic_base_1_00017_ori.png'},
    {'name': 'stimuli/rcic_base_1_00018_inv.png', 'path': 'stimuli/rcic_base_1_00018_inv.png'},
    {'name': 'stimuli/rcic_base_1_00018_ori.png', 'path': 'stimuli/rcic_base_1_00018_ori.png'},
    {'name': 'stimuli/rcic_base_1_00019_inv.png', 'path': 'stimuli/rcic_base_1_00019_inv.png'},
    {'name': 'stimuli/rcic_base_1_00019_ori.png', 'path': 'stimuli/rcic_base_1_00019_ori.png'},
    {'name': 'stimuli/rcic_base_1_00020_inv.png', 'path': 'stimuli/rcic_base_1_00020_inv.png'},
    {'name': 'stimuli/rcic_base_1_00020_ori.png', 'path': 'stimuli/rcic_base_1_00020_ori.png'},
    {'name': 'stimuli/rcic_base_1_00021_inv.png', 'path': 'stimuli/rcic_base_1_00021_inv.png'},
    {'name': 'stimuli/rcic_base_1_00021_ori.png', 'path': 'stimuli/rcic_base_1_00021_ori.png'},
    {'name': 'stimuli/rcic_base_1_00022_inv.png', 'path': 'stimuli/rcic_base_1_00022_inv.png'},
    {'name': 'stimuli/rcic_base_1_00022_ori.png', 'path': 'stimuli/rcic_base_1_00022_ori.png'},
    {'name': 'stimuli/rcic_base_1_00023_inv.png', 'path': 'stimuli/rcic_base_1_00023_inv.png'},
    {'name': 'stimuli/rcic_base_1_00023_ori.png', 'path': 'stimuli/rcic_base_1_00023_ori.png'},
    {'name': 'stimuli/rcic_base_1_00024_inv.png', 'path': 'stimuli/rcic_base_1_00024_inv.png'},
    {'name': 'stimuli/rcic_base_1_00024_ori.png', 'path': 'stimuli/rcic_base_1_00024_ori.png'},
    {'name': 'stimuli/rcic_base_1_00025_inv.png', 'path': 'stimuli/rcic_base_1_00025_inv.png'},
    {'name': 'stimuli/rcic_base_1_00025_ori.png', 'path': 'stimuli/rcic_base_1_00025_ori.png'},
    {'name': 'stimuli/rcic_base_1_00026_inv.png', 'path': 'stimuli/rcic_base_1_00026_inv.png'},
    {'name': 'stimuli/rcic_base_1_00026_ori.png', 'path': 'stimuli/rcic_base_1_00026_ori.png'},
    {'name': 'stimuli/rcic_base_1_00027_inv.png', 'path': 'stimuli/rcic_base_1_00027_inv.png'},
    {'name': 'stimuli/rcic_base_1_00027_ori.png', 'path': 'stimuli/rcic_base_1_00027_ori.png'},
    {'name': 'stimuli/rcic_base_1_00028_inv.png', 'path': 'stimuli/rcic_base_1_00028_inv.png'},
    {'name': 'stimuli/rcic_base_1_00028_ori.png', 'path': 'stimuli/rcic_base_1_00028_ori.png'},
    {'name': 'stimuli/rcic_base_1_00029_inv.png', 'path': 'stimuli/rcic_base_1_00029_inv.png'},
    {'name': 'stimuli/rcic_base_1_00029_ori.png', 'path': 'stimuli/rcic_base_1_00029_ori.png'},
    {'name': 'stimuli/rcic_base_1_00030_inv.png', 'path': 'stimuli/rcic_base_1_00030_inv.png'},
    {'name': 'stimuli/rcic_base_1_00030_ori.png', 'path': 'stimuli/rcic_base_1_00030_ori.png'},
    {'name': 'stimuli/rcic_base_1_00031_inv.png', 'path': 'stimuli/rcic_base_1_00031_inv.png'},
    {'name': 'stimuli/rcic_base_1_00031_ori.png', 'path': 'stimuli/rcic_base_1_00031_ori.png'},
    {'name': 'stimuli/rcic_base_1_00032_inv.png', 'path': 'stimuli/rcic_base_1_00032_inv.png'},
    {'name': 'stimuli/rcic_base_1_00032_ori.png', 'path': 'stimuli/rcic_base_1_00032_ori.png'},
    {'name': 'stimuli/rcic_base_1_00033_inv.png', 'path': 'stimuli/rcic_base_1_00033_inv.png'},
    {'name': 'stimuli/rcic_base_1_00033_ori.png', 'path': 'stimuli/rcic_base_1_00033_ori.png'},
    {'name': 'stimuli/rcic_base_1_00034_inv.png', 'path': 'stimuli/rcic_base_1_00034_inv.png'},
    {'name': 'stimuli/rcic_base_1_00034_ori.png', 'path': 'stimuli/rcic_base_1_00034_ori.png'},
    {'name': 'stimuli/rcic_base_1_00035_inv.png', 'path': 'stimuli/rcic_base_1_00035_inv.png'},
    {'name': 'stimuli/rcic_base_1_00035_ori.png', 'path': 'stimuli/rcic_base_1_00035_ori.png'},
    {'name': 'stimuli/rcic_base_1_00036_inv.png', 'path': 'stimuli/rcic_base_1_00036_inv.png'},
    {'name': 'stimuli/rcic_base_1_00036_ori.png', 'path': 'stimuli/rcic_base_1_00036_ori.png'},
    {'name': 'stimuli/rcic_base_1_00037_inv.png', 'path': 'stimuli/rcic_base_1_00037_inv.png'},
    {'name': 'stimuli/rcic_base_1_00037_ori.png', 'path': 'stimuli/rcic_base_1_00037_ori.png'},
    {'name': 'stimuli/rcic_base_1_00038_inv.png', 'path': 'stimuli/rcic_base_1_00038_inv.png'},
    {'name': 'stimuli/rcic_base_1_00038_ori.png', 'path': 'stimuli/rcic_base_1_00038_ori.png'},
    {'name': 'stimuli/rcic_base_1_00039_inv.png', 'path': 'stimuli/rcic_base_1_00039_inv.png'},
    {'name': 'stimuli/rcic_base_1_00039_ori.png', 'path': 'stimuli/rcic_base_1_00039_ori.png'},
    {'name': 'stimuli/rcic_base_1_00040_inv.png', 'path': 'stimuli/rcic_base_1_00040_inv.png'},
    {'name': 'stimuli/rcic_base_1_00040_ori.png', 'path': 'stimuli/rcic_base_1_00040_ori.png'},
    {'name': 'stimuli/rcic_base_1_00041_inv.png', 'path': 'stimuli/rcic_base_1_00041_inv.png'},
    {'name': 'stimuli/rcic_base_1_00041_ori.png', 'path': 'stimuli/rcic_base_1_00041_ori.png'},
    {'name': 'stimuli/rcic_base_1_00042_inv.png', 'path': 'stimuli/rcic_base_1_00042_inv.png'},
    {'name': 'stimuli/rcic_base_1_00042_ori.png', 'path': 'stimuli/rcic_base_1_00042_ori.png'},
    {'name': 'stimuli/rcic_base_1_00043_inv.png', 'path': 'stimuli/rcic_base_1_00043_inv.png'},
    {'name': 'stimuli/rcic_base_1_00043_ori.png', 'path': 'stimuli/rcic_base_1_00043_ori.png'},
    {'name': 'stimuli/rcic_base_1_00044_inv.png', 'path': 'stimuli/rcic_base_1_00044_inv.png'},
    {'name': 'stimuli/rcic_base_1_00044_ori.png', 'path': 'stimuli/rcic_base_1_00044_ori.png'},
    {'name': 'stimuli/rcic_base_1_00045_inv.png', 'path': 'stimuli/rcic_base_1_00045_inv.png'},
    {'name': 'stimuli/rcic_base_1_00045_ori.png', 'path': 'stimuli/rcic_base_1_00045_ori.png'},
    {'name': 'stimuli/rcic_base_1_00046_inv.png', 'path': 'stimuli/rcic_base_1_00046_inv.png'},
    {'name': 'stimuli/rcic_base_1_00046_ori.png', 'path': 'stimuli/rcic_base_1_00046_ori.png'},
    {'name': 'stimuli/rcic_base_1_00047_inv.png', 'path': 'stimuli/rcic_base_1_00047_inv.png'},
    {'name': 'stimuli/rcic_base_1_00047_ori.png', 'path': 'stimuli/rcic_base_1_00047_ori.png'},
    {'name': 'stimuli/rcic_base_1_00048_inv.png', 'path': 'stimuli/rcic_base_1_00048_inv.png'},
    {'name': 'stimuli/rcic_base_1_00048_ori.png', 'path': 'stimuli/rcic_base_1_00048_ori.png'},
    {'name': 'stimuli/rcic_base_1_00049_inv.png', 'path': 'stimuli/rcic_base_1_00049_inv.png'},
    {'name': 'stimuli/rcic_base_1_00049_ori.png', 'path': 'stimuli/rcic_base_1_00049_ori.png'},
    {'name': 'stimuli/rcic_base_1_00050_inv.png', 'path': 'stimuli/rcic_base_1_00050_inv.png'},
    {'name': 'stimuli/rcic_base_1_00050_ori.png', 'path': 'stimuli/rcic_base_1_00050_ori.png'},
    {'name': 'stimuli/rcic_base_1_00051_inv.png', 'path': 'stimuli/rcic_base_1_00051_inv.png'},
    {'name': 'stimuli/rcic_base_1_00051_ori.png', 'path': 'stimuli/rcic_base_1_00051_ori.png'},
    {'name': 'stimuli/rcic_base_1_00052_inv.png', 'path': 'stimuli/rcic_base_1_00052_inv.png'},
    {'name': 'stimuli/rcic_base_1_00052_ori.png', 'path': 'stimuli/rcic_base_1_00052_ori.png'},
    {'name': 'stimuli/rcic_base_1_00053_inv.png', 'path': 'stimuli/rcic_base_1_00053_inv.png'},
    {'name': 'stimuli/rcic_base_1_00053_ori.png', 'path': 'stimuli/rcic_base_1_00053_ori.png'},
    {'name': 'stimuli/rcic_base_1_00054_inv.png', 'path': 'stimuli/rcic_base_1_00054_inv.png'},
    {'name': 'stimuli/rcic_base_1_00054_ori.png', 'path': 'stimuli/rcic_base_1_00054_ori.png'},
    {'name': 'stimuli/rcic_base_1_00055_inv.png', 'path': 'stimuli/rcic_base_1_00055_inv.png'},
    {'name': 'stimuli/rcic_base_1_00055_ori.png', 'path': 'stimuli/rcic_base_1_00055_ori.png'},
    {'name': 'stimuli/rcic_base_1_00056_inv.png', 'path': 'stimuli/rcic_base_1_00056_inv.png'},
    {'name': 'stimuli/rcic_base_1_00056_ori.png', 'path': 'stimuli/rcic_base_1_00056_ori.png'},
    {'name': 'stimuli/rcic_base_1_00057_inv.png', 'path': 'stimuli/rcic_base_1_00057_inv.png'},
    {'name': 'stimuli/rcic_base_1_00057_ori.png', 'path': 'stimuli/rcic_base_1_00057_ori.png'},
    {'name': 'stimuli/rcic_base_1_00058_inv.png', 'path': 'stimuli/rcic_base_1_00058_inv.png'},
    {'name': 'stimuli/rcic_base_1_00058_ori.png', 'path': 'stimuli/rcic_base_1_00058_ori.png'},
    {'name': 'stimuli/rcic_base_1_00059_inv.png', 'path': 'stimuli/rcic_base_1_00059_inv.png'},
    {'name': 'stimuli/rcic_base_1_00059_ori.png', 'path': 'stimuli/rcic_base_1_00059_ori.png'},
    {'name': 'stimuli/rcic_base_1_00060_inv.png', 'path': 'stimuli/rcic_base_1_00060_inv.png'},
    {'name': 'stimuli/rcic_base_1_00060_ori.png', 'path': 'stimuli/rcic_base_1_00060_ori.png'},
    {'name': 'stimuli/rcic_base_1_00061_inv.png', 'path': 'stimuli/rcic_base_1_00061_inv.png'},
    {'name': 'stimuli/rcic_base_1_00061_ori.png', 'path': 'stimuli/rcic_base_1_00061_ori.png'},
    {'name': 'stimuli/rcic_base_1_00062_inv.png', 'path': 'stimuli/rcic_base_1_00062_inv.png'},
    {'name': 'stimuli/rcic_base_1_00062_ori.png', 'path': 'stimuli/rcic_base_1_00062_ori.png'},
    {'name': 'stimuli/rcic_base_1_00063_inv.png', 'path': 'stimuli/rcic_base_1_00063_inv.png'},
    {'name': 'stimuli/rcic_base_1_00063_ori.png', 'path': 'stimuli/rcic_base_1_00063_ori.png'},
    {'name': 'stimuli/rcic_base_1_00064_inv.png', 'path': 'stimuli/rcic_base_1_00064_inv.png'},
    {'name': 'stimuli/rcic_base_1_00064_ori.png', 'path': 'stimuli/rcic_base_1_00064_ori.png'},
    {'name': 'stimuli/rcic_base_1_00065_inv.png', 'path': 'stimuli/rcic_base_1_00065_inv.png'},
    {'name': 'stimuli/rcic_base_1_00065_ori.png', 'path': 'stimuli/rcic_base_1_00065_ori.png'},
    {'name': 'stimuli/rcic_base_1_00066_inv.png', 'path': 'stimuli/rcic_base_1_00066_inv.png'},
    {'name': 'stimuli/rcic_base_1_00066_ori.png', 'path': 'stimuli/rcic_base_1_00066_ori.png'},
    {'name': 'stimuli/rcic_base_1_00067_inv.png', 'path': 'stimuli/rcic_base_1_00067_inv.png'},
    {'name': 'stimuli/rcic_base_1_00067_ori.png', 'path': 'stimuli/rcic_base_1_00067_ori.png'},
    {'name': 'stimuli/rcic_base_1_00068_inv.png', 'path': 'stimuli/rcic_base_1_00068_inv.png'},
    {'name': 'stimuli/rcic_base_1_00068_ori.png', 'path': 'stimuli/rcic_base_1_00068_ori.png'},
    {'name': 'stimuli/rcic_base_1_00069_inv.png', 'path': 'stimuli/rcic_base_1_00069_inv.png'},
    {'name': 'stimuli/rcic_base_1_00069_ori.png', 'path': 'stimuli/rcic_base_1_00069_ori.png'},
    {'name': 'stimuli/rcic_base_1_00070_inv.png', 'path': 'stimuli/rcic_base_1_00070_inv.png'},
    {'name': 'stimuli/rcic_base_1_00070_ori.png', 'path': 'stimuli/rcic_base_1_00070_ori.png'},
    {'name': 'stimuli/rcic_base_1_00071_inv.png', 'path': 'stimuli/rcic_base_1_00071_inv.png'},
    {'name': 'stimuli/rcic_base_1_00071_ori.png', 'path': 'stimuli/rcic_base_1_00071_ori.png'},
    {'name': 'stimuli/rcic_base_1_00072_inv.png', 'path': 'stimuli/rcic_base_1_00072_inv.png'},
    {'name': 'stimuli/rcic_base_1_00072_ori.png', 'path': 'stimuli/rcic_base_1_00072_ori.png'},
    {'name': 'stimuli/rcic_base_1_00073_inv.png', 'path': 'stimuli/rcic_base_1_00073_inv.png'},
    {'name': 'stimuli/rcic_base_1_00073_ori.png', 'path': 'stimuli/rcic_base_1_00073_ori.png'},
    {'name': 'stimuli/rcic_base_1_00074_inv.png', 'path': 'stimuli/rcic_base_1_00074_inv.png'},
    {'name': 'stimuli/rcic_base_1_00074_ori.png', 'path': 'stimuli/rcic_base_1_00074_ori.png'},
    {'name': 'stimuli/rcic_base_1_00075_inv.png', 'path': 'stimuli/rcic_base_1_00075_inv.png'},
    {'name': 'stimuli/rcic_base_1_00075_ori.png', 'path': 'stimuli/rcic_base_1_00075_ori.png'},
    {'name': 'stimuli/rcic_base_1_00076_inv.png', 'path': 'stimuli/rcic_base_1_00076_inv.png'},
    {'name': 'stimuli/rcic_base_1_00076_ori.png', 'path': 'stimuli/rcic_base_1_00076_ori.png'},
    {'name': 'stimuli/rcic_base_1_00077_inv.png', 'path': 'stimuli/rcic_base_1_00077_inv.png'},
    {'name': 'stimuli/rcic_base_1_00077_ori.png', 'path': 'stimuli/rcic_base_1_00077_ori.png'},
    {'name': 'stimuli/rcic_base_1_00078_inv.png', 'path': 'stimuli/rcic_base_1_00078_inv.png'},
    {'name': 'stimuli/rcic_base_1_00078_ori.png', 'path': 'stimuli/rcic_base_1_00078_ori.png'},
    {'name': 'stimuli/rcic_base_1_00079_inv.png', 'path': 'stimuli/rcic_base_1_00079_inv.png'},
    {'name': 'stimuli/rcic_base_1_00079_ori.png', 'path': 'stimuli/rcic_base_1_00079_ori.png'},
    {'name': 'stimuli/rcic_base_1_00080_inv.png', 'path': 'stimuli/rcic_base_1_00080_inv.png'},
    {'name': 'stimuli/rcic_base_1_00080_ori.png', 'path': 'stimuli/rcic_base_1_00080_ori.png'},
    {'name': 'stimuli/rcic_base_1_00081_inv.png', 'path': 'stimuli/rcic_base_1_00081_inv.png'},
    {'name': 'stimuli/rcic_base_1_00081_ori.png', 'path': 'stimuli/rcic_base_1_00081_ori.png'},
    {'name': 'stimuli/rcic_base_1_00082_inv.png', 'path': 'stimuli/rcic_base_1_00082_inv.png'},
    {'name': 'stimuli/rcic_base_1_00082_ori.png', 'path': 'stimuli/rcic_base_1_00082_ori.png'},
    {'name': 'stimuli/rcic_base_1_00083_inv.png', 'path': 'stimuli/rcic_base_1_00083_inv.png'},
    {'name': 'stimuli/rcic_base_1_00083_ori.png', 'path': 'stimuli/rcic_base_1_00083_ori.png'},
    {'name': 'stimuli/rcic_base_1_00084_inv.png', 'path': 'stimuli/rcic_base_1_00084_inv.png'},
    {'name': 'stimuli/rcic_base_1_00084_ori.png', 'path': 'stimuli/rcic_base_1_00084_ori.png'},
    {'name': 'stimuli/rcic_base_1_00085_inv.png', 'path': 'stimuli/rcic_base_1_00085_inv.png'},
    {'name': 'stimuli/rcic_base_1_00085_ori.png', 'path': 'stimuli/rcic_base_1_00085_ori.png'},
    {'name': 'stimuli/rcic_base_1_00086_inv.png', 'path': 'stimuli/rcic_base_1_00086_inv.png'},
    {'name': 'stimuli/rcic_base_1_00086_ori.png', 'path': 'stimuli/rcic_base_1_00086_ori.png'},
    {'name': 'stimuli/rcic_base_1_00087_inv.png', 'path': 'stimuli/rcic_base_1_00087_inv.png'},
    {'name': 'stimuli/rcic_base_1_00087_ori.png', 'path': 'stimuli/rcic_base_1_00087_ori.png'},
    {'name': 'stimuli/rcic_base_1_00088_inv.png', 'path': 'stimuli/rcic_base_1_00088_inv.png'},
    {'name': 'stimuli/rcic_base_1_00088_ori.png', 'path': 'stimuli/rcic_base_1_00088_ori.png'},
    {'name': 'stimuli/rcic_base_1_00089_inv.png', 'path': 'stimuli/rcic_base_1_00089_inv.png'},
    {'name': 'stimuli/rcic_base_1_00089_ori.png', 'path': 'stimuli/rcic_base_1_00089_ori.png'},
    {'name': 'stimuli/rcic_base_1_00090_inv.png', 'path': 'stimuli/rcic_base_1_00090_inv.png'},
    {'name': 'stimuli/rcic_base_1_00090_ori.png', 'path': 'stimuli/rcic_base_1_00090_ori.png'},
    {'name': 'stimuli/rcic_base_1_00091_inv.png', 'path': 'stimuli/rcic_base_1_00091_inv.png'},
    {'name': 'stimuli/rcic_base_1_00091_ori.png', 'path': 'stimuli/rcic_base_1_00091_ori.png'},
    {'name': 'stimuli/rcic_base_1_00092_inv.png', 'path': 'stimuli/rcic_base_1_00092_inv.png'},
    {'name': 'stimuli/rcic_base_1_00092_ori.png', 'path': 'stimuli/rcic_base_1_00092_ori.png'},
    {'name': 'stimuli/rcic_base_1_00093_inv.png', 'path': 'stimuli/rcic_base_1_00093_inv.png'},
    {'name': 'stimuli/rcic_base_1_00093_ori.png', 'path': 'stimuli/rcic_base_1_00093_ori.png'},
    {'name': 'stimuli/rcic_base_1_00094_inv.png', 'path': 'stimuli/rcic_base_1_00094_inv.png'},
    {'name': 'stimuli/rcic_base_1_00094_ori.png', 'path': 'stimuli/rcic_base_1_00094_ori.png'},
    {'name': 'stimuli/rcic_base_1_00095_inv.png', 'path': 'stimuli/rcic_base_1_00095_inv.png'},
    {'name': 'stimuli/rcic_base_1_00095_ori.png', 'path': 'stimuli/rcic_base_1_00095_ori.png'},
    {'name': 'stimuli/rcic_base_1_00096_inv.png', 'path': 'stimuli/rcic_base_1_00096_inv.png'},
    {'name': 'stimuli/rcic_base_1_00096_ori.png', 'path': 'stimuli/rcic_base_1_00096_ori.png'},
    {'name': 'stimuli/rcic_base_1_00097_inv.png', 'path': 'stimuli/rcic_base_1_00097_inv.png'},
    {'name': 'stimuli/rcic_base_1_00097_ori.png', 'path': 'stimuli/rcic_base_1_00097_ori.png'},
    {'name': 'stimuli/rcic_base_1_00098_inv.png', 'path': 'stimuli/rcic_base_1_00098_inv.png'},
    {'name': 'stimuli/rcic_base_1_00098_ori.png', 'path': 'stimuli/rcic_base_1_00098_ori.png'},
    {'name': 'stimuli/rcic_base_1_00099_inv.png', 'path': 'stimuli/rcic_base_1_00099_inv.png'},
    {'name': 'stimuli/rcic_base_1_00099_ori.png', 'path': 'stimuli/rcic_base_1_00099_ori.png'},
    {'name': 'stimuli/rcic_base_1_00100_inv.png', 'path': 'stimuli/rcic_base_1_00100_inv.png'},
    {'name': 'stimuli/rcic_base_1_00100_ori.png', 'path': 'stimuli/rcic_base_1_00100_ori.png'},
    {'name': 'stimuli/rcic_base_1_00101_inv.png', 'path': 'stimuli/rcic_base_1_00101_inv.png'},
    {'name': 'stimuli/rcic_base_1_00101_ori.png', 'path': 'stimuli/rcic_base_1_00101_ori.png'},
    {'name': 'stimuli/rcic_base_1_00102_inv.png', 'path': 'stimuli/rcic_base_1_00102_inv.png'},
    {'name': 'stimuli/rcic_base_1_00102_ori.png', 'path': 'stimuli/rcic_base_1_00102_ori.png'},
    {'name': 'stimuli/rcic_base_1_00103_inv.png', 'path': 'stimuli/rcic_base_1_00103_inv.png'},
    {'name': 'stimuli/rcic_base_1_00103_ori.png', 'path': 'stimuli/rcic_base_1_00103_ori.png'},
    {'name': 'stimuli/rcic_base_1_00104_inv.png', 'path': 'stimuli/rcic_base_1_00104_inv.png'},
    {'name': 'stimuli/rcic_base_1_00104_ori.png', 'path': 'stimuli/rcic_base_1_00104_ori.png'},
    {'name': 'stimuli/rcic_base_1_00105_inv.png', 'path': 'stimuli/rcic_base_1_00105_inv.png'},
    {'name': 'stimuli/rcic_base_1_00105_ori.png', 'path': 'stimuli/rcic_base_1_00105_ori.png'},
    {'name': 'stimuli/rcic_base_1_00106_inv.png', 'path': 'stimuli/rcic_base_1_00106_inv.png'},
    {'name': 'stimuli/rcic_base_1_00106_ori.png', 'path': 'stimuli/rcic_base_1_00106_ori.png'},
    {'name': 'stimuli/rcic_base_1_00107_inv.png', 'path': 'stimuli/rcic_base_1_00107_inv.png'},
    {'name': 'stimuli/rcic_base_1_00107_ori.png', 'path': 'stimuli/rcic_base_1_00107_ori.png'},
    {'name': 'stimuli/rcic_base_1_00108_inv.png', 'path': 'stimuli/rcic_base_1_00108_inv.png'},
    {'name': 'stimuli/rcic_base_1_00108_ori.png', 'path': 'stimuli/rcic_base_1_00108_ori.png'},
    {'name': 'stimuli/rcic_base_1_00109_inv.png', 'path': 'stimuli/rcic_base_1_00109_inv.png'},
    {'name': 'stimuli/rcic_base_1_00109_ori.png', 'path': 'stimuli/rcic_base_1_00109_ori.png'},
    {'name': 'stimuli/rcic_base_1_00110_inv.png', 'path': 'stimuli/rcic_base_1_00110_inv.png'},
    {'name': 'stimuli/rcic_base_1_00110_ori.png', 'path': 'stimuli/rcic_base_1_00110_ori.png'},
    {'name': 'stimuli/rcic_base_1_00111_inv.png', 'path': 'stimuli/rcic_base_1_00111_inv.png'},
    {'name': 'stimuli/rcic_base_1_00111_ori.png', 'path': 'stimuli/rcic_base_1_00111_ori.png'},
    {'name': 'stimuli/rcic_base_1_00112_inv.png', 'path': 'stimuli/rcic_base_1_00112_inv.png'},
    {'name': 'stimuli/rcic_base_1_00112_ori.png', 'path': 'stimuli/rcic_base_1_00112_ori.png'},
    {'name': 'stimuli/rcic_base_1_00113_inv.png', 'path': 'stimuli/rcic_base_1_00113_inv.png'},
    {'name': 'stimuli/rcic_base_1_00113_ori.png', 'path': 'stimuli/rcic_base_1_00113_ori.png'},
    {'name': 'stimuli/rcic_base_1_00114_inv.png', 'path': 'stimuli/rcic_base_1_00114_inv.png'},
    {'name': 'stimuli/rcic_base_1_00114_ori.png', 'path': 'stimuli/rcic_base_1_00114_ori.png'},
    {'name': 'stimuli/rcic_base_1_00115_inv.png', 'path': 'stimuli/rcic_base_1_00115_inv.png'},
    {'name': 'stimuli/rcic_base_1_00115_ori.png', 'path': 'stimuli/rcic_base_1_00115_ori.png'},
    {'name': 'stimuli/rcic_base_1_00116_inv.png', 'path': 'stimuli/rcic_base_1_00116_inv.png'},
    {'name': 'stimuli/rcic_base_1_00116_ori.png', 'path': 'stimuli/rcic_base_1_00116_ori.png'},
    {'name': 'stimuli/rcic_base_1_00117_inv.png', 'path': 'stimuli/rcic_base_1_00117_inv.png'},
    {'name': 'stimuli/rcic_base_1_00117_ori.png', 'path': 'stimuli/rcic_base_1_00117_ori.png'},
    {'name': 'stimuli/rcic_base_1_00118_inv.png', 'path': 'stimuli/rcic_base_1_00118_inv.png'},
    {'name': 'stimuli/rcic_base_1_00118_ori.png', 'path': 'stimuli/rcic_base_1_00118_ori.png'},
    {'name': 'stimuli/rcic_base_1_00119_inv.png', 'path': 'stimuli/rcic_base_1_00119_inv.png'},
    {'name': 'stimuli/rcic_base_1_00119_ori.png', 'path': 'stimuli/rcic_base_1_00119_ori.png'},
    {'name': 'stimuli/rcic_base_1_00120_inv.png', 'path': 'stimuli/rcic_base_1_00120_inv.png'},
    {'name': 'stimuli/rcic_base_1_00120_ori.png', 'path': 'stimuli/rcic_base_1_00120_ori.png'},
    {'name': 'stimuli/rcic_base_1_00121_inv.png', 'path': 'stimuli/rcic_base_1_00121_inv.png'},
    {'name': 'stimuli/rcic_base_1_00121_ori.png', 'path': 'stimuli/rcic_base_1_00121_ori.png'},
    {'name': 'stimuli/rcic_base_1_00122_inv.png', 'path': 'stimuli/rcic_base_1_00122_inv.png'},
    {'name': 'stimuli/rcic_base_1_00122_ori.png', 'path': 'stimuli/rcic_base_1_00122_ori.png'},
    {'name': 'stimuli/rcic_base_1_00123_inv.png', 'path': 'stimuli/rcic_base_1_00123_inv.png'},
    {'name': 'stimuli/rcic_base_1_00123_ori.png', 'path': 'stimuli/rcic_base_1_00123_ori.png'},
    {'name': 'stimuli/rcic_base_1_00124_inv.png', 'path': 'stimuli/rcic_base_1_00124_inv.png'},
    {'name': 'stimuli/rcic_base_1_00124_ori.png', 'path': 'stimuli/rcic_base_1_00124_ori.png'},
    {'name': 'stimuli/rcic_base_1_00125_inv.png', 'path': 'stimuli/rcic_base_1_00125_inv.png'},
    {'name': 'stimuli/rcic_base_1_00125_ori.png', 'path': 'stimuli/rcic_base_1_00125_ori.png'},
    {'name': 'stimuli/rcic_base_1_00126_inv.png', 'path': 'stimuli/rcic_base_1_00126_inv.png'},
    {'name': 'stimuli/rcic_base_1_00126_ori.png', 'path': 'stimuli/rcic_base_1_00126_ori.png'},
    {'name': 'stimuli/rcic_base_1_00127_inv.png', 'path': 'stimuli/rcic_base_1_00127_inv.png'},
    {'name': 'stimuli/rcic_base_1_00127_ori.png', 'path': 'stimuli/rcic_base_1_00127_ori.png'},
    {'name': 'stimuli/rcic_base_1_00128_inv.png', 'path': 'stimuli/rcic_base_1_00128_inv.png'},
    {'name': 'stimuli/rcic_base_1_00128_ori.png', 'path': 'stimuli/rcic_base_1_00128_ori.png'},
    {'name': 'stimuli/rcic_base_1_00129_inv.png', 'path': 'stimuli/rcic_base_1_00129_inv.png'},
    {'name': 'stimuli/rcic_base_1_00129_ori.png', 'path': 'stimuli/rcic_base_1_00129_ori.png'},
    {'name': 'stimuli/rcic_base_1_00130_inv.png', 'path': 'stimuli/rcic_base_1_00130_inv.png'},
    {'name': 'stimuli/rcic_base_1_00130_ori.png', 'path': 'stimuli/rcic_base_1_00130_ori.png'},
    {'name': 'stimuli/rcic_base_1_00131_inv.png', 'path': 'stimuli/rcic_base_1_00131_inv.png'},
    {'name': 'stimuli/rcic_base_1_00131_ori.png', 'path': 'stimuli/rcic_base_1_00131_ori.png'},
    {'name': 'stimuli/rcic_base_1_00132_inv.png', 'path': 'stimuli/rcic_base_1_00132_inv.png'},
    {'name': 'stimuli/rcic_base_1_00132_ori.png', 'path': 'stimuli/rcic_base_1_00132_ori.png'},
    {'name': 'stimuli/rcic_base_1_00133_inv.png', 'path': 'stimuli/rcic_base_1_00133_inv.png'},
    {'name': 'stimuli/rcic_base_1_00133_ori.png', 'path': 'stimuli/rcic_base_1_00133_ori.png'},
    {'name': 'stimuli/rcic_base_1_00134_inv.png', 'path': 'stimuli/rcic_base_1_00134_inv.png'},
    {'name': 'stimuli/rcic_base_1_00134_ori.png', 'path': 'stimuli/rcic_base_1_00134_ori.png'},
    {'name': 'stimuli/rcic_base_1_00135_inv.png', 'path': 'stimuli/rcic_base_1_00135_inv.png'},
    {'name': 'stimuli/rcic_base_1_00135_ori.png', 'path': 'stimuli/rcic_base_1_00135_ori.png'},
    {'name': 'stimuli/rcic_base_1_00136_inv.png', 'path': 'stimuli/rcic_base_1_00136_inv.png'},
    {'name': 'stimuli/rcic_base_1_00136_ori.png', 'path': 'stimuli/rcic_base_1_00136_ori.png'},
    {'name': 'stimuli/rcic_base_1_00137_inv.png', 'path': 'stimuli/rcic_base_1_00137_inv.png'},
    {'name': 'stimuli/rcic_base_1_00137_ori.png', 'path': 'stimuli/rcic_base_1_00137_ori.png'},
    {'name': 'stimuli/rcic_base_1_00138_inv.png', 'path': 'stimuli/rcic_base_1_00138_inv.png'},
    {'name': 'stimuli/rcic_base_1_00138_ori.png', 'path': 'stimuli/rcic_base_1_00138_ori.png'},
    {'name': 'stimuli/rcic_base_1_00139_inv.png', 'path': 'stimuli/rcic_base_1_00139_inv.png'},
    {'name': 'stimuli/rcic_base_1_00139_ori.png', 'path': 'stimuli/rcic_base_1_00139_ori.png'},
    {'name': 'stimuli/rcic_base_1_00140_inv.png', 'path': 'stimuli/rcic_base_1_00140_inv.png'},
    {'name': 'stimuli/rcic_base_1_00140_ori.png', 'path': 'stimuli/rcic_base_1_00140_ori.png'},
    {'name': 'stimuli/rcic_base_1_00141_inv.png', 'path': 'stimuli/rcic_base_1_00141_inv.png'},
    {'name': 'stimuli/rcic_base_1_00141_ori.png', 'path': 'stimuli/rcic_base_1_00141_ori.png'},
    {'name': 'stimuli/rcic_base_1_00142_inv.png', 'path': 'stimuli/rcic_base_1_00142_inv.png'},
    {'name': 'stimuli/rcic_base_1_00142_ori.png', 'path': 'stimuli/rcic_base_1_00142_ori.png'},
    {'name': 'stimuli/rcic_base_1_00143_inv.png', 'path': 'stimuli/rcic_base_1_00143_inv.png'},
    {'name': 'stimuli/rcic_base_1_00143_ori.png', 'path': 'stimuli/rcic_base_1_00143_ori.png'},
    {'name': 'stimuli/rcic_base_1_00144_inv.png', 'path': 'stimuli/rcic_base_1_00144_inv.png'},
    {'name': 'stimuli/rcic_base_1_00144_ori.png', 'path': 'stimuli/rcic_base_1_00144_ori.png'},
    {'name': 'stimuli/rcic_base_1_00145_inv.png', 'path': 'stimuli/rcic_base_1_00145_inv.png'},
    {'name': 'stimuli/rcic_base_1_00145_ori.png', 'path': 'stimuli/rcic_base_1_00145_ori.png'},
    {'name': 'stimuli/rcic_base_1_00146_inv.png', 'path': 'stimuli/rcic_base_1_00146_inv.png'},
    {'name': 'stimuli/rcic_base_1_00146_ori.png', 'path': 'stimuli/rcic_base_1_00146_ori.png'},
    {'name': 'stimuli/rcic_base_1_00147_inv.png', 'path': 'stimuli/rcic_base_1_00147_inv.png'},
    {'name': 'stimuli/rcic_base_1_00147_ori.png', 'path': 'stimuli/rcic_base_1_00147_ori.png'},
    {'name': 'stimuli/rcic_base_1_00148_inv.png', 'path': 'stimuli/rcic_base_1_00148_inv.png'},
    {'name': 'stimuli/rcic_base_1_00148_ori.png', 'path': 'stimuli/rcic_base_1_00148_ori.png'},
    {'name': 'stimuli/rcic_base_1_00149_inv.png', 'path': 'stimuli/rcic_base_1_00149_inv.png'},
    {'name': 'stimuli/rcic_base_1_00149_ori.png', 'path': 'stimuli/rcic_base_1_00149_ori.png'},
    {'name': 'stimuli/rcic_base_1_00150_inv.png', 'path': 'stimuli/rcic_base_1_00150_inv.png'},
    {'name': 'stimuli/rcic_base_1_00150_ori.png', 'path': 'stimuli/rcic_base_1_00150_ori.png'},
    {'name': 'stimuli/rcic_base_1_00151_inv.png', 'path': 'stimuli/rcic_base_1_00151_inv.png'},
    {'name': 'stimuli/rcic_base_1_00151_ori.png', 'path': 'stimuli/rcic_base_1_00151_ori.png'},
    {'name': 'stimuli/rcic_base_1_00152_inv.png', 'path': 'stimuli/rcic_base_1_00152_inv.png'},
    {'name': 'stimuli/rcic_base_1_00152_ori.png', 'path': 'stimuli/rcic_base_1_00152_ori.png'},
    {'name': 'stimuli/rcic_base_1_00153_inv.png', 'path': 'stimuli/rcic_base_1_00153_inv.png'},
    {'name': 'stimuli/rcic_base_1_00153_ori.png', 'path': 'stimuli/rcic_base_1_00153_ori.png'},
    {'name': 'stimuli/rcic_base_1_00154_inv.png', 'path': 'stimuli/rcic_base_1_00154_inv.png'},
    {'name': 'stimuli/rcic_base_1_00154_ori.png', 'path': 'stimuli/rcic_base_1_00154_ori.png'},
    {'name': 'stimuli/rcic_base_1_00155_inv.png', 'path': 'stimuli/rcic_base_1_00155_inv.png'},
    {'name': 'stimuli/rcic_base_1_00155_ori.png', 'path': 'stimuli/rcic_base_1_00155_ori.png'},
    {'name': 'stimuli/rcic_base_1_00156_inv.png', 'path': 'stimuli/rcic_base_1_00156_inv.png'},
    {'name': 'stimuli/rcic_base_1_00156_ori.png', 'path': 'stimuli/rcic_base_1_00156_ori.png'},
    {'name': 'stimuli/rcic_base_1_00157_inv.png', 'path': 'stimuli/rcic_base_1_00157_inv.png'},
    {'name': 'stimuli/rcic_base_1_00157_ori.png', 'path': 'stimuli/rcic_base_1_00157_ori.png'},
    {'name': 'stimuli/rcic_base_1_00158_inv.png', 'path': 'stimuli/rcic_base_1_00158_inv.png'},
    {'name': 'stimuli/rcic_base_1_00158_ori.png', 'path': 'stimuli/rcic_base_1_00158_ori.png'},
    {'name': 'stimuli/rcic_base_1_00159_inv.png', 'path': 'stimuli/rcic_base_1_00159_inv.png'},
    {'name': 'stimuli/rcic_base_1_00159_ori.png', 'path': 'stimuli/rcic_base_1_00159_ori.png'},
    {'name': 'stimuli/rcic_base_1_00160_inv.png', 'path': 'stimuli/rcic_base_1_00160_inv.png'},
    {'name': 'stimuli/rcic_base_1_00160_ori.png', 'path': 'stimuli/rcic_base_1_00160_ori.png'},
    {'name': 'stimuli/rcic_base_1_00161_inv.png', 'path': 'stimuli/rcic_base_1_00161_inv.png'},
    {'name': 'stimuli/rcic_base_1_00161_ori.png', 'path': 'stimuli/rcic_base_1_00161_ori.png'},
    {'name': 'stimuli/rcic_base_1_00162_inv.png', 'path': 'stimuli/rcic_base_1_00162_inv.png'},
    {'name': 'stimuli/rcic_base_1_00162_ori.png', 'path': 'stimuli/rcic_base_1_00162_ori.png'},
    {'name': 'stimuli/rcic_base_1_00163_inv.png', 'path': 'stimuli/rcic_base_1_00163_inv.png'},
    {'name': 'stimuli/rcic_base_1_00163_ori.png', 'path': 'stimuli/rcic_base_1_00163_ori.png'},
    {'name': 'stimuli/rcic_base_1_00164_inv.png', 'path': 'stimuli/rcic_base_1_00164_inv.png'},
    {'name': 'stimuli/rcic_base_1_00164_ori.png', 'path': 'stimuli/rcic_base_1_00164_ori.png'},
    {'name': 'stimuli/rcic_base_1_00165_inv.png', 'path': 'stimuli/rcic_base_1_00165_inv.png'},
    {'name': 'stimuli/rcic_base_1_00165_ori.png', 'path': 'stimuli/rcic_base_1_00165_ori.png'},
    {'name': 'stimuli/rcic_base_1_00166_inv.png', 'path': 'stimuli/rcic_base_1_00166_inv.png'},
    {'name': 'stimuli/rcic_base_1_00166_ori.png', 'path': 'stimuli/rcic_base_1_00166_ori.png'},
    {'name': 'stimuli/rcic_base_1_00167_inv.png', 'path': 'stimuli/rcic_base_1_00167_inv.png'},
    {'name': 'stimuli/rcic_base_1_00167_ori.png', 'path': 'stimuli/rcic_base_1_00167_ori.png'},
    {'name': 'stimuli/rcic_base_1_00168_inv.png', 'path': 'stimuli/rcic_base_1_00168_inv.png'},
    {'name': 'stimuli/rcic_base_1_00168_ori.png', 'path': 'stimuli/rcic_base_1_00168_ori.png'},
    {'name': 'stimuli/rcic_base_1_00169_inv.png', 'path': 'stimuli/rcic_base_1_00169_inv.png'},
    {'name': 'stimuli/rcic_base_1_00169_ori.png', 'path': 'stimuli/rcic_base_1_00169_ori.png'},
    {'name': 'stimuli/rcic_base_1_00170_inv.png', 'path': 'stimuli/rcic_base_1_00170_inv.png'},
    {'name': 'stimuli/rcic_base_1_00170_ori.png', 'path': 'stimuli/rcic_base_1_00170_ori.png'},
    {'name': 'stimuli/rcic_base_1_00171_inv.png', 'path': 'stimuli/rcic_base_1_00171_inv.png'},
    {'name': 'stimuli/rcic_base_1_00171_ori.png', 'path': 'stimuli/rcic_base_1_00171_ori.png'},
    {'name': 'stimuli/rcic_base_1_00172_inv.png', 'path': 'stimuli/rcic_base_1_00172_inv.png'},
    {'name': 'stimuli/rcic_base_1_00172_ori.png', 'path': 'stimuli/rcic_base_1_00172_ori.png'},
    {'name': 'stimuli/rcic_base_1_00173_inv.png', 'path': 'stimuli/rcic_base_1_00173_inv.png'},
    {'name': 'stimuli/rcic_base_1_00173_ori.png', 'path': 'stimuli/rcic_base_1_00173_ori.png'},
    {'name': 'stimuli/rcic_base_1_00174_inv.png', 'path': 'stimuli/rcic_base_1_00174_inv.png'},
    {'name': 'stimuli/rcic_base_1_00174_ori.png', 'path': 'stimuli/rcic_base_1_00174_ori.png'},
    {'name': 'stimuli/rcic_base_1_00175_inv.png', 'path': 'stimuli/rcic_base_1_00175_inv.png'},
    {'name': 'stimuli/rcic_base_1_00175_ori.png', 'path': 'stimuli/rcic_base_1_00175_ori.png'},
    {'name': 'stimuli/rcic_base_1_00176_inv.png', 'path': 'stimuli/rcic_base_1_00176_inv.png'},
    {'name': 'stimuli/rcic_base_1_00176_ori.png', 'path': 'stimuli/rcic_base_1_00176_ori.png'},
    {'name': 'stimuli/rcic_base_1_00177_inv.png', 'path': 'stimuli/rcic_base_1_00177_inv.png'},
    {'name': 'stimuli/rcic_base_1_00177_ori.png', 'path': 'stimuli/rcic_base_1_00177_ori.png'},
    {'name': 'stimuli/rcic_base_1_00178_inv.png', 'path': 'stimuli/rcic_base_1_00178_inv.png'},
    {'name': 'stimuli/rcic_base_1_00178_ori.png', 'path': 'stimuli/rcic_base_1_00178_ori.png'},
    {'name': 'stimuli/rcic_base_1_00179_inv.png', 'path': 'stimuli/rcic_base_1_00179_inv.png'},
    {'name': 'stimuli/rcic_base_1_00179_ori.png', 'path': 'stimuli/rcic_base_1_00179_ori.png'},
    {'name': 'stimuli/rcic_base_1_00180_inv.png', 'path': 'stimuli/rcic_base_1_00180_inv.png'},
    {'name': 'stimuli/rcic_base_1_00180_ori.png', 'path': 'stimuli/rcic_base_1_00180_ori.png'},
    {'name': 'stimuli/rcic_base_1_00181_inv.png', 'path': 'stimuli/rcic_base_1_00181_inv.png'},
    {'name': 'stimuli/rcic_base_1_00181_ori.png', 'path': 'stimuli/rcic_base_1_00181_ori.png'},
    {'name': 'stimuli/rcic_base_1_00182_inv.png', 'path': 'stimuli/rcic_base_1_00182_inv.png'},
    {'name': 'stimuli/rcic_base_1_00182_ori.png', 'path': 'stimuli/rcic_base_1_00182_ori.png'},
    {'name': 'stimuli/rcic_base_1_00183_inv.png', 'path': 'stimuli/rcic_base_1_00183_inv.png'},
    {'name': 'stimuli/rcic_base_1_00183_ori.png', 'path': 'stimuli/rcic_base_1_00183_ori.png'},
    {'name': 'stimuli/rcic_base_1_00184_inv.png', 'path': 'stimuli/rcic_base_1_00184_inv.png'},
    {'name': 'stimuli/rcic_base_1_00184_ori.png', 'path': 'stimuli/rcic_base_1_00184_ori.png'},
    {'name': 'stimuli/rcic_base_1_00185_inv.png', 'path': 'stimuli/rcic_base_1_00185_inv.png'},
    {'name': 'stimuli/rcic_base_1_00185_ori.png', 'path': 'stimuli/rcic_base_1_00185_ori.png'},
    {'name': 'stimuli/rcic_base_1_00186_inv.png', 'path': 'stimuli/rcic_base_1_00186_inv.png'},
    {'name': 'stimuli/rcic_base_1_00186_ori.png', 'path': 'stimuli/rcic_base_1_00186_ori.png'},
    {'name': 'stimuli/rcic_base_1_00187_inv.png', 'path': 'stimuli/rcic_base_1_00187_inv.png'},
    {'name': 'stimuli/rcic_base_1_00187_ori.png', 'path': 'stimuli/rcic_base_1_00187_ori.png'},
    {'name': 'stimuli/rcic_base_1_00188_inv.png', 'path': 'stimuli/rcic_base_1_00188_inv.png'},
    {'name': 'stimuli/rcic_base_1_00188_ori.png', 'path': 'stimuli/rcic_base_1_00188_ori.png'},
    {'name': 'stimuli/rcic_base_1_00189_inv.png', 'path': 'stimuli/rcic_base_1_00189_inv.png'},
    {'name': 'stimuli/rcic_base_1_00189_ori.png', 'path': 'stimuli/rcic_base_1_00189_ori.png'},
    {'name': 'stimuli/rcic_base_1_00190_inv.png', 'path': 'stimuli/rcic_base_1_00190_inv.png'},
    {'name': 'stimuli/rcic_base_1_00190_ori.png', 'path': 'stimuli/rcic_base_1_00190_ori.png'},
    {'name': 'stimuli/rcic_base_1_00191_inv.png', 'path': 'stimuli/rcic_base_1_00191_inv.png'},
    {'name': 'stimuli/rcic_base_1_00191_ori.png', 'path': 'stimuli/rcic_base_1_00191_ori.png'},
    {'name': 'stimuli/rcic_base_1_00192_inv.png', 'path': 'stimuli/rcic_base_1_00192_inv.png'},
    {'name': 'stimuli/rcic_base_1_00192_ori.png', 'path': 'stimuli/rcic_base_1_00192_ori.png'},
    {'name': 'stimuli/rcic_base_1_00193_inv.png', 'path': 'stimuli/rcic_base_1_00193_inv.png'},
    {'name': 'stimuli/rcic_base_1_00193_ori.png', 'path': 'stimuli/rcic_base_1_00193_ori.png'},
    {'name': 'stimuli/rcic_base_1_00194_inv.png', 'path': 'stimuli/rcic_base_1_00194_inv.png'},
    {'name': 'stimuli/rcic_base_1_00194_ori.png', 'path': 'stimuli/rcic_base_1_00194_ori.png'},
    {'name': 'stimuli/rcic_base_1_00195_inv.png', 'path': 'stimuli/rcic_base_1_00195_inv.png'},
    {'name': 'stimuli/rcic_base_1_00195_ori.png', 'path': 'stimuli/rcic_base_1_00195_ori.png'},
    {'name': 'stimuli/rcic_base_1_00196_inv.png', 'path': 'stimuli/rcic_base_1_00196_inv.png'},
    {'name': 'stimuli/rcic_base_1_00196_ori.png', 'path': 'stimuli/rcic_base_1_00196_ori.png'},
    {'name': 'stimuli/rcic_base_1_00197_inv.png', 'path': 'stimuli/rcic_base_1_00197_inv.png'},
    {'name': 'stimuli/rcic_base_1_00197_ori.png', 'path': 'stimuli/rcic_base_1_00197_ori.png'},
    {'name': 'stimuli/rcic_base_1_00198_inv.png', 'path': 'stimuli/rcic_base_1_00198_inv.png'},
    {'name': 'stimuli/rcic_base_1_00198_ori.png', 'path': 'stimuli/rcic_base_1_00198_ori.png'},
    {'name': 'stimuli/rcic_base_1_00199_inv.png', 'path': 'stimuli/rcic_base_1_00199_inv.png'},
    {'name': 'stimuli/rcic_base_1_00199_ori.png', 'path': 'stimuli/rcic_base_1_00199_ori.png'},
    {'name': 'stimuli/rcic_base_1_00200_inv.png', 'path': 'stimuli/rcic_base_1_00200_inv.png'},
    {'name': 'stimuli/rcic_base_1_00200_ori.png', 'path': 'stimuli/rcic_base_1_00200_ori.png'},
    {'name': 'stimuli/rcic_base_1_00201_inv.png', 'path': 'stimuli/rcic_base_1_00201_inv.png'},
    {'name': 'stimuli/rcic_base_1_00201_ori.png', 'path': 'stimuli/rcic_base_1_00201_ori.png'},
    {'name': 'stimuli/rcic_base_1_00202_inv.png', 'path': 'stimuli/rcic_base_1_00202_inv.png'},
    {'name': 'stimuli/rcic_base_1_00202_ori.png', 'path': 'stimuli/rcic_base_1_00202_ori.png'},
    {'name': 'stimuli/rcic_base_1_00203_inv.png', 'path': 'stimuli/rcic_base_1_00203_inv.png'},
    {'name': 'stimuli/rcic_base_1_00203_ori.png', 'path': 'stimuli/rcic_base_1_00203_ori.png'},
    {'name': 'stimuli/rcic_base_1_00204_inv.png', 'path': 'stimuli/rcic_base_1_00204_inv.png'},
    {'name': 'stimuli/rcic_base_1_00204_ori.png', 'path': 'stimuli/rcic_base_1_00204_ori.png'},
    {'name': 'stimuli/rcic_base_1_00205_inv.png', 'path': 'stimuli/rcic_base_1_00205_inv.png'},
    {'name': 'stimuli/rcic_base_1_00205_ori.png', 'path': 'stimuli/rcic_base_1_00205_ori.png'},
    {'name': 'stimuli/rcic_base_1_00206_inv.png', 'path': 'stimuli/rcic_base_1_00206_inv.png'},
    {'name': 'stimuli/rcic_base_1_00206_ori.png', 'path': 'stimuli/rcic_base_1_00206_ori.png'},
    {'name': 'stimuli/rcic_base_1_00207_inv.png', 'path': 'stimuli/rcic_base_1_00207_inv.png'},
    {'name': 'stimuli/rcic_base_1_00207_ori.png', 'path': 'stimuli/rcic_base_1_00207_ori.png'},
    {'name': 'stimuli/rcic_base_1_00208_inv.png', 'path': 'stimuli/rcic_base_1_00208_inv.png'},
    {'name': 'stimuli/rcic_base_1_00208_ori.png', 'path': 'stimuli/rcic_base_1_00208_ori.png'},
    {'name': 'stimuli/rcic_base_1_00209_inv.png', 'path': 'stimuli/rcic_base_1_00209_inv.png'},
    {'name': 'stimuli/rcic_base_1_00209_ori.png', 'path': 'stimuli/rcic_base_1_00209_ori.png'},
    {'name': 'stimuli/rcic_base_1_00210_inv.png', 'path': 'stimuli/rcic_base_1_00210_inv.png'},
    {'name': 'stimuli/rcic_base_1_00210_ori.png', 'path': 'stimuli/rcic_base_1_00210_ori.png'},
    {'name': 'stimuli/rcic_base_1_00211_inv.png', 'path': 'stimuli/rcic_base_1_00211_inv.png'},
    {'name': 'stimuli/rcic_base_1_00211_ori.png', 'path': 'stimuli/rcic_base_1_00211_ori.png'},
    {'name': 'stimuli/rcic_base_1_00212_inv.png', 'path': 'stimuli/rcic_base_1_00212_inv.png'},
    {'name': 'stimuli/rcic_base_1_00212_ori.png', 'path': 'stimuli/rcic_base_1_00212_ori.png'},
    {'name': 'stimuli/rcic_base_1_00213_inv.png', 'path': 'stimuli/rcic_base_1_00213_inv.png'},
    {'name': 'stimuli/rcic_base_1_00213_ori.png', 'path': 'stimuli/rcic_base_1_00213_ori.png'},
    {'name': 'stimuli/rcic_base_1_00214_inv.png', 'path': 'stimuli/rcic_base_1_00214_inv.png'},
    {'name': 'stimuli/rcic_base_1_00214_ori.png', 'path': 'stimuli/rcic_base_1_00214_ori.png'},
    {'name': 'stimuli/rcic_base_1_00215_inv.png', 'path': 'stimuli/rcic_base_1_00215_inv.png'},
    {'name': 'stimuli/rcic_base_1_00215_ori.png', 'path': 'stimuli/rcic_base_1_00215_ori.png'},
    {'name': 'stimuli/rcic_base_1_00216_inv.png', 'path': 'stimuli/rcic_base_1_00216_inv.png'},
    {'name': 'stimuli/rcic_base_1_00216_ori.png', 'path': 'stimuli/rcic_base_1_00216_ori.png'},
    {'name': 'stimuli/rcic_base_1_00217_inv.png', 'path': 'stimuli/rcic_base_1_00217_inv.png'},
    {'name': 'stimuli/rcic_base_1_00217_ori.png', 'path': 'stimuli/rcic_base_1_00217_ori.png'},
    {'name': 'stimuli/rcic_base_1_00218_inv.png', 'path': 'stimuli/rcic_base_1_00218_inv.png'},
    {'name': 'stimuli/rcic_base_1_00218_ori.png', 'path': 'stimuli/rcic_base_1_00218_ori.png'},
    {'name': 'stimuli/rcic_base_1_00219_inv.png', 'path': 'stimuli/rcic_base_1_00219_inv.png'},
    {'name': 'stimuli/rcic_base_1_00219_ori.png', 'path': 'stimuli/rcic_base_1_00219_ori.png'},
    {'name': 'stimuli/rcic_base_1_00220_inv.png', 'path': 'stimuli/rcic_base_1_00220_inv.png'},
    {'name': 'stimuli/rcic_base_1_00220_ori.png', 'path': 'stimuli/rcic_base_1_00220_ori.png'},
    {'name': 'stimuli/rcic_base_1_00221_inv.png', 'path': 'stimuli/rcic_base_1_00221_inv.png'},
    {'name': 'stimuli/rcic_base_1_00221_ori.png', 'path': 'stimuli/rcic_base_1_00221_ori.png'},
    {'name': 'stimuli/rcic_base_1_00222_inv.png', 'path': 'stimuli/rcic_base_1_00222_inv.png'},
    {'name': 'stimuli/rcic_base_1_00222_ori.png', 'path': 'stimuli/rcic_base_1_00222_ori.png'},
    {'name': 'stimuli/rcic_base_1_00223_inv.png', 'path': 'stimuli/rcic_base_1_00223_inv.png'},
    {'name': 'stimuli/rcic_base_1_00223_ori.png', 'path': 'stimuli/rcic_base_1_00223_ori.png'},
    {'name': 'stimuli/rcic_base_1_00224_inv.png', 'path': 'stimuli/rcic_base_1_00224_inv.png'},
    {'name': 'stimuli/rcic_base_1_00224_ori.png', 'path': 'stimuli/rcic_base_1_00224_ori.png'},
    {'name': 'stimuli/rcic_base_1_00225_inv.png', 'path': 'stimuli/rcic_base_1_00225_inv.png'},
    {'name': 'stimuli/rcic_base_1_00225_ori.png', 'path': 'stimuli/rcic_base_1_00225_ori.png'},
    {'name': 'stimuli/rcic_base_1_00226_inv.png', 'path': 'stimuli/rcic_base_1_00226_inv.png'},
    {'name': 'stimuli/rcic_base_1_00226_ori.png', 'path': 'stimuli/rcic_base_1_00226_ori.png'},
    {'name': 'stimuli/rcic_base_1_00227_inv.png', 'path': 'stimuli/rcic_base_1_00227_inv.png'},
    {'name': 'stimuli/rcic_base_1_00227_ori.png', 'path': 'stimuli/rcic_base_1_00227_ori.png'},
    {'name': 'stimuli/rcic_base_1_00228_inv.png', 'path': 'stimuli/rcic_base_1_00228_inv.png'},
    {'name': 'stimuli/rcic_base_1_00228_ori.png', 'path': 'stimuli/rcic_base_1_00228_ori.png'},
    {'name': 'stimuli/rcic_base_1_00229_inv.png', 'path': 'stimuli/rcic_base_1_00229_inv.png'},
    {'name': 'stimuli/rcic_base_1_00229_ori.png', 'path': 'stimuli/rcic_base_1_00229_ori.png'},
    {'name': 'stimuli/rcic_base_1_00230_inv.png', 'path': 'stimuli/rcic_base_1_00230_inv.png'},
    {'name': 'stimuli/rcic_base_1_00230_ori.png', 'path': 'stimuli/rcic_base_1_00230_ori.png'},
    {'name': 'stimuli/rcic_base_1_00231_inv.png', 'path': 'stimuli/rcic_base_1_00231_inv.png'},
    {'name': 'stimuli/rcic_base_1_00231_ori.png', 'path': 'stimuli/rcic_base_1_00231_ori.png'},
    {'name': 'stimuli/rcic_base_1_00232_inv.png', 'path': 'stimuli/rcic_base_1_00232_inv.png'},
    {'name': 'stimuli/rcic_base_1_00232_ori.png', 'path': 'stimuli/rcic_base_1_00232_ori.png'},
    {'name': 'stimuli/rcic_base_1_00233_inv.png', 'path': 'stimuli/rcic_base_1_00233_inv.png'},
    {'name': 'stimuli/rcic_base_1_00233_ori.png', 'path': 'stimuli/rcic_base_1_00233_ori.png'},
    {'name': 'stimuli/rcic_base_1_00234_inv.png', 'path': 'stimuli/rcic_base_1_00234_inv.png'},
    {'name': 'stimuli/rcic_base_1_00234_ori.png', 'path': 'stimuli/rcic_base_1_00234_ori.png'},
    {'name': 'stimuli/rcic_base_1_00235_inv.png', 'path': 'stimuli/rcic_base_1_00235_inv.png'},
    {'name': 'stimuli/rcic_base_1_00235_ori.png', 'path': 'stimuli/rcic_base_1_00235_ori.png'},
    {'name': 'stimuli/rcic_base_1_00236_inv.png', 'path': 'stimuli/rcic_base_1_00236_inv.png'},
    {'name': 'stimuli/rcic_base_1_00236_ori.png', 'path': 'stimuli/rcic_base_1_00236_ori.png'},
    {'name': 'stimuli/rcic_base_1_00237_inv.png', 'path': 'stimuli/rcic_base_1_00237_inv.png'},
    {'name': 'stimuli/rcic_base_1_00237_ori.png', 'path': 'stimuli/rcic_base_1_00237_ori.png'},
    {'name': 'stimuli/rcic_base_1_00238_inv.png', 'path': 'stimuli/rcic_base_1_00238_inv.png'},
    {'name': 'stimuli/rcic_base_1_00238_ori.png', 'path': 'stimuli/rcic_base_1_00238_ori.png'},
    {'name': 'stimuli/rcic_base_1_00239_inv.png', 'path': 'stimuli/rcic_base_1_00239_inv.png'},
    {'name': 'stimuli/rcic_base_1_00239_ori.png', 'path': 'stimuli/rcic_base_1_00239_ori.png'},
    {'name': 'stimuli/rcic_base_1_00240_inv.png', 'path': 'stimuli/rcic_base_1_00240_inv.png'},
    {'name': 'stimuli/rcic_base_1_00240_ori.png', 'path': 'stimuli/rcic_base_1_00240_ori.png'},
    {'name': 'stimuli/rcic_base_1_00241_inv.png', 'path': 'stimuli/rcic_base_1_00241_inv.png'},
    {'name': 'stimuli/rcic_base_1_00241_ori.png', 'path': 'stimuli/rcic_base_1_00241_ori.png'},
    {'name': 'stimuli/rcic_base_1_00242_inv.png', 'path': 'stimuli/rcic_base_1_00242_inv.png'},
    {'name': 'stimuli/rcic_base_1_00242_ori.png', 'path': 'stimuli/rcic_base_1_00242_ori.png'},
    {'name': 'stimuli/rcic_base_1_00243_inv.png', 'path': 'stimuli/rcic_base_1_00243_inv.png'},
    {'name': 'stimuli/rcic_base_1_00243_ori.png', 'path': 'stimuli/rcic_base_1_00243_ori.png'},
    {'name': 'stimuli/rcic_base_1_00244_inv.png', 'path': 'stimuli/rcic_base_1_00244_inv.png'},
    {'name': 'stimuli/rcic_base_1_00244_ori.png', 'path': 'stimuli/rcic_base_1_00244_ori.png'},
    {'name': 'stimuli/rcic_base_1_00245_inv.png', 'path': 'stimuli/rcic_base_1_00245_inv.png'},
    {'name': 'stimuli/rcic_base_1_00245_ori.png', 'path': 'stimuli/rcic_base_1_00245_ori.png'},
    {'name': 'stimuli/rcic_base_1_00246_inv.png', 'path': 'stimuli/rcic_base_1_00246_inv.png'},
    {'name': 'stimuli/rcic_base_1_00246_ori.png', 'path': 'stimuli/rcic_base_1_00246_ori.png'},
    {'name': 'stimuli/rcic_base_1_00247_inv.png', 'path': 'stimuli/rcic_base_1_00247_inv.png'},
    {'name': 'stimuli/rcic_base_1_00247_ori.png', 'path': 'stimuli/rcic_base_1_00247_ori.png'},
    {'name': 'stimuli/rcic_base_1_00248_inv.png', 'path': 'stimuli/rcic_base_1_00248_inv.png'},
    {'name': 'stimuli/rcic_base_1_00248_ori.png', 'path': 'stimuli/rcic_base_1_00248_ori.png'},
    {'name': 'stimuli/rcic_base_1_00249_inv.png', 'path': 'stimuli/rcic_base_1_00249_inv.png'},
    {'name': 'stimuli/rcic_base_1_00249_ori.png', 'path': 'stimuli/rcic_base_1_00249_ori.png'},
    {'name': 'stimuli/rcic_base_1_00250_inv.png', 'path': 'stimuli/rcic_base_1_00250_inv.png'},
    {'name': 'stimuli/rcic_base_1_00250_ori.png', 'path': 'stimuli/rcic_base_1_00250_ori.png'},
    {'name': 'individual_differences.xlsx', 'path': 'individual_differences.xlsx'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["id_number"]}_${expName}_${expInfo["date"]}_${expInfo["condition"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introductionClock;
var instructions;
var end_intro;
var task_instructionsClock;
var instr;
var begin_task;
var img_generationClock;
var inverse;
var original;
var choice_text;
var image_choice;
var left_sign;
var right_sign;
var individual_diffs_introClock;
var individual_diffs_text;
var begin_individual_diffs;
var individual_diffsClock;
var item_text;
var item_response;
var item_minimum;
var item_maximum;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var demo_introClock;
var demographics_intro;
var ageClock;
var age_question;
var age_response;
var sexClock;
var sex_question;
var sex_response;
var raceClock;
var race_question;
var race_response;
var thanksClock;
var thanks_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "introduction"
  introductionClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_instructions"
  task_instructionsClock = new util.Clock();
  instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  begin_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "img_generation"
  img_generationClock = new util.Clock();
  inverse = new visual.ImageStim({
    win : psychoJS.window,
    name : 'inverse', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [500, 500],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  original = new visual.ImageStim({
    win : psychoJS.window,
    name : 'original', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [500, 500],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  choice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'choice_text',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 360], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  image_choice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  left_sign = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_sign',
    text: 'LEFT',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 350)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  right_sign = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_sign',
    text: 'RIGHT',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 350)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "individual_diffs_intro"
  individual_diffs_introClock = new util.Clock();
  individual_diffs_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'individual_diffs_text',
    text: 'Thank you for your responses!\n\nIn this section, we have a series of questions to ask you. These items are designed to gain an understanding of how you view the world around you. \n\nThere are no right or wrong answers. Please read each item and respond as honestly as you can. Note that we encourage you to go with your "gut" intuition when entering each response.\n\nFor each trial, press the corresponding numeric key on the numeric keypad on your keyboard to enter your response.\n\nPress the SPACE BAR to begin!',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  begin_individual_diffs = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "individual_diffs"
  individual_diffsClock = new util.Clock();
  item_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'item_text',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 150], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  item_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  item_minimum = new visual.TextStim({
    win: psychoJS.window,
    name: 'item_minimum',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  item_maximum = new visual.TextStim({
    win: psychoJS.window,
    name: 'item_maximum',
    text: '',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 50)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  one = new visual.TextStim({
    win: psychoJS.window,
    name: 'one',
    text: '1',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 300), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  two = new visual.TextStim({
    win: psychoJS.window,
    name: 'two',
    text: '2',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 200), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  three = new visual.TextStim({
    win: psychoJS.window,
    name: 'three',
    text: '3',
    font: 'Avenir Next',
    units: undefined, 
    pos: [(- 100), (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  four = new visual.TextStim({
    win: psychoJS.window,
    name: 'four',
    text: '4',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  five = new visual.TextStim({
    win: psychoJS.window,
    name: 'five',
    text: '5',
    font: 'Avenir Next',
    units: undefined, 
    pos: [100, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  six = new visual.TextStim({
    win: psychoJS.window,
    name: 'six',
    text: '6',
    font: 'Avenir Next',
    units: undefined, 
    pos: [200, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  seven = new visual.TextStim({
    win: psychoJS.window,
    name: 'seven',
    text: '7',
    font: 'Avenir Next',
    units: undefined, 
    pos: [300, (- 100)], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "demo_intro"
  demo_introClock = new util.Clock();
  demographics_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'demographics_intro',
    text: 'Thank you for your responses!\n\nWe will now collect some demographic information about you before the end of the study.',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "age"
  ageClock = new util.Clock();
  age_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'age_question',
    text: 'What is your age:\n\n(press the corresponding letter key to enter a value)\n\n(a) 18-27\n(b) 28-37\n(c) 38-47\n(d) 48-57\n(e) 58-67\n(f) 68+',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  age_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sex"
  sexClock = new util.Clock();
  sex_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'sex_question',
    text: "What is your sex?\n\nPress 'm' for male\nPress 'f' for female\nPress 'b' for non-binary\nPress 'o' for other",
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sex_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "race"
  raceClock = new util.Clock();
  race_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'race_question',
    text: "What is your race?\n\nPress 'b' for Black/African American\nPress 'w' for White\nPress 'l' for Latino/a\nPress 'n' for Native American\nPress 'a' for Asian/Pacific Islander\nPress 'e' for Middle Eastern\nPress 'm' for Multi/Biracial",
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  race_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Thanks for participating in our experiment! \n\nThis was a study designed to determine your mental representation of typical STEM professors depending on the target gender (male or female). The images you saw were in fact the same base image every time, but with different noise patterns overlaid to obscure small parts of the face and enhance others. \n\nThese images will be averaged together to come up with a "classification" image that shows the average representation people have of the faces of typical "male" and "female" STEM professors.\n\nShould you have any further questions, please contact the experimenters listed on the hosting platform or on the consent form.',
    font: 'Avenir Next',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var intro_loop;
function intro_loopLoopBegin(intro_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    intro_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, (("condition" + expInfo["condition"]) + ".xlsx"), '1'),
      seed: undefined, name: 'intro_loop'
    });
    psychoJS.experiment.addLoop(intro_loop); // add the loop to the experiment
    currentLoop = intro_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    intro_loop.forEach(function() {
      snapshot = intro_loop.getSnapshot();
    
      intro_loopLoopScheduler.add(importConditions(snapshot));
      intro_loopLoopScheduler.add(introductionRoutineBegin(snapshot));
      intro_loopLoopScheduler.add(introductionRoutineEachFrame());
      intro_loopLoopScheduler.add(introductionRoutineEnd(snapshot));
      intro_loopLoopScheduler.add(intro_loopLoopEndIteration(intro_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function intro_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(intro_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function intro_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var task_instruction_loop;
function task_instruction_loopLoopBegin(task_instruction_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    task_instruction_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, (("condition" + expInfo["condition"]) + ".xlsx"), '1'),
      seed: undefined, name: 'task_instruction_loop'
    });
    psychoJS.experiment.addLoop(task_instruction_loop); // add the loop to the experiment
    currentLoop = task_instruction_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    task_instruction_loop.forEach(function() {
      snapshot = task_instruction_loop.getSnapshot();
    
      task_instruction_loopLoopScheduler.add(importConditions(snapshot));
      task_instruction_loopLoopScheduler.add(task_instructionsRoutineBegin(snapshot));
      task_instruction_loopLoopScheduler.add(task_instructionsRoutineEachFrame());
      task_instruction_loopLoopScheduler.add(task_instructionsRoutineEnd(snapshot));
      task_instruction_loopLoopScheduler.add(task_instruction_loopLoopEndIteration(task_instruction_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function task_instruction_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(task_instruction_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function task_instruction_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var img_gen_trials_loop;
function img_gen_trials_loopLoopBegin(img_gen_trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    img_gen_trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("condition" + expInfo["condition"]) + ".xlsx"),
      seed: undefined, name: 'img_gen_trials_loop'
    });
    psychoJS.experiment.addLoop(img_gen_trials_loop); // add the loop to the experiment
    currentLoop = img_gen_trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    img_gen_trials_loop.forEach(function() {
      snapshot = img_gen_trials_loop.getSnapshot();
    
      img_gen_trials_loopLoopScheduler.add(importConditions(snapshot));
      img_gen_trials_loopLoopScheduler.add(img_generationRoutineBegin(snapshot));
      img_gen_trials_loopLoopScheduler.add(img_generationRoutineEachFrame());
      img_gen_trials_loopLoopScheduler.add(img_generationRoutineEnd(snapshot));
      img_gen_trials_loopLoopScheduler.add(img_gen_trials_loopLoopEndIteration(img_gen_trials_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function img_gen_trials_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(img_gen_trials_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function img_gen_trials_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var individual_diffs_loop;
function individual_diffs_loopLoopBegin(individual_diffs_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    individual_diffs_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'individual_differences.xlsx',
      seed: undefined, name: 'individual_diffs_loop'
    });
    psychoJS.experiment.addLoop(individual_diffs_loop); // add the loop to the experiment
    currentLoop = individual_diffs_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    individual_diffs_loop.forEach(function() {
      snapshot = individual_diffs_loop.getSnapshot();
    
      individual_diffs_loopLoopScheduler.add(importConditions(snapshot));
      individual_diffs_loopLoopScheduler.add(individual_diffsRoutineBegin(snapshot));
      individual_diffs_loopLoopScheduler.add(individual_diffsRoutineEachFrame());
      individual_diffs_loopLoopScheduler.add(individual_diffsRoutineEnd(snapshot));
      individual_diffs_loopLoopScheduler.add(individual_diffs_loopLoopEndIteration(individual_diffs_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function individual_diffs_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(individual_diffs_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function individual_diffs_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var introductionMaxDurationReached;
var _end_intro_allKeys;
var introductionMaxDuration;
var introductionComponents;
function introductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'introduction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    introductionClock.reset();
    routineTimer.reset();
    introductionMaxDurationReached = false;
    // update component parameters for each repeat
    instructions.setText(intro);
    end_intro.keys = undefined;
    end_intro.rt = undefined;
    _end_intro_allKeys = [];
    psychoJS.experiment.addData('introduction.started', globalClock.getTime());
    introductionMaxDuration = null
    // keep track of which components have finished
    introductionComponents = [];
    introductionComponents.push(instructions);
    introductionComponents.push(end_intro);
    
    introductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introductionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'introduction' ---
    // get current time
    t = introductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (frameN >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }
    
    
    // *end_intro* updates
    if (frameN >= 0 && end_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_intro.tStart = t;  // (not accounting for frame time here)
      end_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_intro.clearEvents(); });
    }
    
    if (end_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_intro.getKeys({keyList: ['space'], waitRelease: false});
      _end_intro_allKeys = _end_intro_allKeys.concat(theseKeys);
      if (_end_intro_allKeys.length > 0) {
        end_intro.keys = _end_intro_allKeys[_end_intro_allKeys.length - 1].name;  // just the last key pressed
        end_intro.rt = _end_intro_allKeys[_end_intro_allKeys.length - 1].rt;
        end_intro.duration = _end_intro_allKeys[_end_intro_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introductionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introductionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'introduction' ---
    introductionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('introduction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_intro.corr, level);
    }
    psychoJS.experiment.addData('end_intro.keys', end_intro.keys);
    if (typeof end_intro.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_intro.rt', end_intro.rt);
        psychoJS.experiment.addData('end_intro.duration', end_intro.duration);
        routineTimer.reset();
        }
    
    end_intro.stop();
    // the Routine "introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var task_instructionsMaxDurationReached;
var _begin_task_allKeys;
var task_instructionsMaxDuration;
var task_instructionsComponents;
function task_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'task_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    task_instructionsClock.reset();
    routineTimer.reset();
    task_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    instr.setText(overall_instr);
    begin_task.keys = undefined;
    begin_task.rt = undefined;
    _begin_task_allKeys = [];
    psychoJS.experiment.addData('task_instructions.started', globalClock.getTime());
    task_instructionsMaxDuration = null
    // keep track of which components have finished
    task_instructionsComponents = [];
    task_instructionsComponents.push(instr);
    task_instructionsComponents.push(begin_task);
    
    task_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task_instructions' ---
    // get current time
    t = task_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr* updates
    if (frameN >= 0 && instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr.tStart = t;  // (not accounting for frame time here)
      instr.frameNStart = frameN;  // exact frame index
      
      instr.setAutoDraw(true);
    }
    
    
    // *begin_task* updates
    if (frameN >= 0.0 && begin_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_task.tStart = t;  // (not accounting for frame time here)
      begin_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { begin_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { begin_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { begin_task.clearEvents(); });
    }
    
    if (begin_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = begin_task.getKeys({keyList: ['space'], waitRelease: false});
      _begin_task_allKeys = _begin_task_allKeys.concat(theseKeys);
      if (_begin_task_allKeys.length > 0) {
        begin_task.keys = _begin_task_allKeys[_begin_task_allKeys.length - 1].name;  // just the last key pressed
        begin_task.rt = _begin_task_allKeys[_begin_task_allKeys.length - 1].rt;
        begin_task.duration = _begin_task_allKeys[_begin_task_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    task_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task_instructions' ---
    task_instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('task_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(begin_task.corr, level);
    }
    psychoJS.experiment.addData('begin_task.keys', begin_task.keys);
    if (typeof begin_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('begin_task.rt', begin_task.rt);
        psychoJS.experiment.addData('begin_task.duration', begin_task.duration);
        routineTimer.reset();
        }
    
    begin_task.stop();
    // the Routine "task_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var img_generationMaxDurationReached;
var _image_choice_allKeys;
var img_generationMaxDuration;
var img_generationComponents;
function img_generationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'img_generation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    img_generationClock.reset();
    routineTimer.reset();
    img_generationMaxDurationReached = false;
    // update component parameters for each repeat
    inverse.setPos([inv_loc_X, inv_loc_Y]);
    inverse.setImage(inverse_image);
    original.setPos([ori_loc_X, ori_loc_Y]);
    original.setImage(original_image);
    choice_text.setText(category_instr);
    image_choice.keys = undefined;
    image_choice.rt = undefined;
    _image_choice_allKeys = [];
    psychoJS.experiment.addData('img_generation.started', globalClock.getTime());
    img_generationMaxDuration = null
    // keep track of which components have finished
    img_generationComponents = [];
    img_generationComponents.push(inverse);
    img_generationComponents.push(original);
    img_generationComponents.push(choice_text);
    img_generationComponents.push(image_choice);
    img_generationComponents.push(left_sign);
    img_generationComponents.push(right_sign);
    
    img_generationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function img_generationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'img_generation' ---
    // get current time
    t = img_generationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inverse* updates
    if (frameN >= 0.0 && inverse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inverse.tStart = t;  // (not accounting for frame time here)
      inverse.frameNStart = frameN;  // exact frame index
      
      inverse.setAutoDraw(true);
    }
    
    
    // *original* updates
    if (frameN >= 0.0 && original.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      original.tStart = t;  // (not accounting for frame time here)
      original.frameNStart = frameN;  // exact frame index
      
      original.setAutoDraw(true);
    }
    
    
    // *choice_text* updates
    if (frameN >= 0.0 && choice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_text.tStart = t;  // (not accounting for frame time here)
      choice_text.frameNStart = frameN;  // exact frame index
      
      choice_text.setAutoDraw(true);
    }
    
    
    // *image_choice* updates
    if (frameN >= 0.0 && image_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_choice.tStart = t;  // (not accounting for frame time here)
      image_choice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { image_choice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { image_choice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { image_choice.clearEvents(); });
    }
    
    if (image_choice.status === PsychoJS.Status.STARTED) {
      let theseKeys = image_choice.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _image_choice_allKeys = _image_choice_allKeys.concat(theseKeys);
      if (_image_choice_allKeys.length > 0) {
        image_choice.keys = _image_choice_allKeys[_image_choice_allKeys.length - 1].name;  // just the last key pressed
        image_choice.rt = _image_choice_allKeys[_image_choice_allKeys.length - 1].rt;
        image_choice.duration = _image_choice_allKeys[_image_choice_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *left_sign* updates
    if (frameN >= 0.0 && left_sign.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_sign.tStart = t;  // (not accounting for frame time here)
      left_sign.frameNStart = frameN;  // exact frame index
      
      left_sign.setAutoDraw(true);
    }
    
    
    // *right_sign* updates
    if (frameN >= 0.0 && right_sign.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_sign.tStart = t;  // (not accounting for frame time here)
      right_sign.frameNStart = frameN;  // exact frame index
      
      right_sign.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    img_generationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function img_generationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'img_generation' ---
    img_generationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('img_generation.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(image_choice.corr, level);
    }
    psychoJS.experiment.addData('image_choice.keys', image_choice.keys);
    if (typeof image_choice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('image_choice.rt', image_choice.rt);
        psychoJS.experiment.addData('image_choice.duration', image_choice.duration);
        routineTimer.reset();
        }
    
    image_choice.stop();
    // the Routine "img_generation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var individual_diffs_introMaxDurationReached;
var _begin_individual_diffs_allKeys;
var individual_diffs_introMaxDuration;
var individual_diffs_introComponents;
function individual_diffs_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'individual_diffs_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    individual_diffs_introClock.reset();
    routineTimer.reset();
    individual_diffs_introMaxDurationReached = false;
    // update component parameters for each repeat
    begin_individual_diffs.keys = undefined;
    begin_individual_diffs.rt = undefined;
    _begin_individual_diffs_allKeys = [];
    psychoJS.experiment.addData('individual_diffs_intro.started', globalClock.getTime());
    individual_diffs_introMaxDuration = null
    // keep track of which components have finished
    individual_diffs_introComponents = [];
    individual_diffs_introComponents.push(individual_diffs_text);
    individual_diffs_introComponents.push(begin_individual_diffs);
    
    individual_diffs_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function individual_diffs_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'individual_diffs_intro' ---
    // get current time
    t = individual_diffs_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *individual_diffs_text* updates
    if (frameN >= 0.0 && individual_diffs_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      individual_diffs_text.tStart = t;  // (not accounting for frame time here)
      individual_diffs_text.frameNStart = frameN;  // exact frame index
      
      individual_diffs_text.setAutoDraw(true);
    }
    
    
    // *begin_individual_diffs* updates
    if (frameN >= 0.0 && begin_individual_diffs.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_individual_diffs.tStart = t;  // (not accounting for frame time here)
      begin_individual_diffs.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { begin_individual_diffs.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { begin_individual_diffs.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { begin_individual_diffs.clearEvents(); });
    }
    
    if (begin_individual_diffs.status === PsychoJS.Status.STARTED) {
      let theseKeys = begin_individual_diffs.getKeys({keyList: ['space'], waitRelease: false});
      _begin_individual_diffs_allKeys = _begin_individual_diffs_allKeys.concat(theseKeys);
      if (_begin_individual_diffs_allKeys.length > 0) {
        begin_individual_diffs.keys = _begin_individual_diffs_allKeys[_begin_individual_diffs_allKeys.length - 1].name;  // just the last key pressed
        begin_individual_diffs.rt = _begin_individual_diffs_allKeys[_begin_individual_diffs_allKeys.length - 1].rt;
        begin_individual_diffs.duration = _begin_individual_diffs_allKeys[_begin_individual_diffs_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    individual_diffs_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function individual_diffs_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'individual_diffs_intro' ---
    individual_diffs_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('individual_diffs_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(begin_individual_diffs.corr, level);
    }
    psychoJS.experiment.addData('begin_individual_diffs.keys', begin_individual_diffs.keys);
    if (typeof begin_individual_diffs.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('begin_individual_diffs.rt', begin_individual_diffs.rt);
        psychoJS.experiment.addData('begin_individual_diffs.duration', begin_individual_diffs.duration);
        routineTimer.reset();
        }
    
    begin_individual_diffs.stop();
    // the Routine "individual_diffs_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var individual_diffsMaxDurationReached;
var _item_response_allKeys;
var individual_diffsMaxDuration;
var individual_diffsComponents;
function individual_diffsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'individual_diffs' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    individual_diffsClock.reset();
    routineTimer.reset();
    individual_diffsMaxDurationReached = false;
    // update component parameters for each repeat
    item_text.setText(question);
    item_response.keys = undefined;
    item_response.rt = undefined;
    _item_response_allKeys = [];
    item_minimum.setText(minimum);
    item_maximum.setText(maximum);
    psychoJS.experiment.addData('individual_diffs.started', globalClock.getTime());
    individual_diffsMaxDuration = null
    // keep track of which components have finished
    individual_diffsComponents = [];
    individual_diffsComponents.push(item_text);
    individual_diffsComponents.push(item_response);
    individual_diffsComponents.push(item_minimum);
    individual_diffsComponents.push(item_maximum);
    individual_diffsComponents.push(one);
    individual_diffsComponents.push(two);
    individual_diffsComponents.push(three);
    individual_diffsComponents.push(four);
    individual_diffsComponents.push(five);
    individual_diffsComponents.push(six);
    individual_diffsComponents.push(seven);
    
    individual_diffsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function individual_diffsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'individual_diffs' ---
    // get current time
    t = individual_diffsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *item_text* updates
    if (frameN >= 0.0 && item_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item_text.tStart = t;  // (not accounting for frame time here)
      item_text.frameNStart = frameN;  // exact frame index
      
      item_text.setAutoDraw(true);
    }
    
    
    // *item_response* updates
    if (frameN >= 0.0 && item_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item_response.tStart = t;  // (not accounting for frame time here)
      item_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { item_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { item_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { item_response.clearEvents(); });
    }
    
    if (item_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = item_response.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7'], waitRelease: false});
      _item_response_allKeys = _item_response_allKeys.concat(theseKeys);
      if (_item_response_allKeys.length > 0) {
        item_response.keys = _item_response_allKeys[_item_response_allKeys.length - 1].name;  // just the last key pressed
        item_response.rt = _item_response_allKeys[_item_response_allKeys.length - 1].rt;
        item_response.duration = _item_response_allKeys[_item_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *item_minimum* updates
    if (frameN >= 0.0 && item_minimum.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item_minimum.tStart = t;  // (not accounting for frame time here)
      item_minimum.frameNStart = frameN;  // exact frame index
      
      item_minimum.setAutoDraw(true);
    }
    
    
    // *item_maximum* updates
    if (frameN >= 0.0 && item_maximum.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item_maximum.tStart = t;  // (not accounting for frame time here)
      item_maximum.frameNStart = frameN;  // exact frame index
      
      item_maximum.setAutoDraw(true);
    }
    
    
    // *one* updates
    if (frameN >= 0.0 && one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one.tStart = t;  // (not accounting for frame time here)
      one.frameNStart = frameN;  // exact frame index
      
      one.setAutoDraw(true);
    }
    
    
    // *two* updates
    if (frameN >= 0.0 && two.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      two.tStart = t;  // (not accounting for frame time here)
      two.frameNStart = frameN;  // exact frame index
      
      two.setAutoDraw(true);
    }
    
    
    // *three* updates
    if (frameN >= 0.0 && three.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      three.tStart = t;  // (not accounting for frame time here)
      three.frameNStart = frameN;  // exact frame index
      
      three.setAutoDraw(true);
    }
    
    
    // *four* updates
    if (frameN >= 0.0 && four.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      four.tStart = t;  // (not accounting for frame time here)
      four.frameNStart = frameN;  // exact frame index
      
      four.setAutoDraw(true);
    }
    
    
    // *five* updates
    if (frameN >= 0.0 && five.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      five.tStart = t;  // (not accounting for frame time here)
      five.frameNStart = frameN;  // exact frame index
      
      five.setAutoDraw(true);
    }
    
    
    // *six* updates
    if (frameN >= 0.0 && six.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      six.tStart = t;  // (not accounting for frame time here)
      six.frameNStart = frameN;  // exact frame index
      
      six.setAutoDraw(true);
    }
    
    
    // *seven* updates
    if (frameN >= 0.0 && seven.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seven.tStart = t;  // (not accounting for frame time here)
      seven.frameNStart = frameN;  // exact frame index
      
      seven.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    individual_diffsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function individual_diffsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'individual_diffs' ---
    individual_diffsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('individual_diffs.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(item_response.corr, level);
    }
    psychoJS.experiment.addData('item_response.keys', item_response.keys);
    if (typeof item_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('item_response.rt', item_response.rt);
        psychoJS.experiment.addData('item_response.duration', item_response.duration);
        routineTimer.reset();
        }
    
    item_response.stop();
    // the Routine "individual_diffs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_introMaxDurationReached;
var demo_introMaxDuration;
var demo_introComponents;
function demo_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    demo_introClock.reset();
    routineTimer.reset();
    demo_introMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('demo_intro.started', globalClock.getTime());
    demo_introMaxDuration = null
    // keep track of which components have finished
    demo_introComponents = [];
    demo_introComponents.push(demographics_intro);
    
    demo_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function demo_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_intro' ---
    // get current time
    t = demo_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demographics_intro* updates
    if (frameN >= 0.0 && demographics_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_intro.tStart = t;  // (not accounting for frame time here)
      demographics_intro.frameNStart = frameN;  // exact frame index
      
      demographics_intro.setAutoDraw(true);
    }
    
    if (demographics_intro.status === PsychoJS.Status.STARTED && frameN >= 300) {
      demographics_intro.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demo_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_intro' ---
    demo_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('demo_intro.stopped', globalClock.getTime());
    // the Routine "demo_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ageMaxDurationReached;
var _age_response_allKeys;
var ageMaxDuration;
var ageComponents;
function ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'age' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ageClock.reset();
    routineTimer.reset();
    ageMaxDurationReached = false;
    // update component parameters for each repeat
    age_response.keys = undefined;
    age_response.rt = undefined;
    _age_response_allKeys = [];
    psychoJS.experiment.addData('age.started', globalClock.getTime());
    ageMaxDuration = null
    // keep track of which components have finished
    ageComponents = [];
    ageComponents.push(age_question);
    ageComponents.push(age_response);
    
    ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'age' ---
    // get current time
    t = ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *age_question* updates
    if (frameN >= 0.0 && age_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_question.tStart = t;  // (not accounting for frame time here)
      age_question.frameNStart = frameN;  // exact frame index
      
      age_question.setAutoDraw(true);
    }
    
    
    // *age_response* updates
    if (frameN >= 0.0 && age_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_response.tStart = t;  // (not accounting for frame time here)
      age_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { age_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { age_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { age_response.clearEvents(); });
    }
    
    if (age_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = age_response.getKeys({keyList: ['a', 'b', 'c', 'd', 'e', 'f'], waitRelease: false});
      _age_response_allKeys = _age_response_allKeys.concat(theseKeys);
      if (_age_response_allKeys.length > 0) {
        age_response.keys = _age_response_allKeys[_age_response_allKeys.length - 1].name;  // just the last key pressed
        age_response.rt = _age_response_allKeys[_age_response_allKeys.length - 1].rt;
        age_response.duration = _age_response_allKeys[_age_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'age' ---
    ageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('age.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(age_response.corr, level);
    }
    psychoJS.experiment.addData('age_response.keys', age_response.keys);
    if (typeof age_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('age_response.rt', age_response.rt);
        psychoJS.experiment.addData('age_response.duration', age_response.duration);
        routineTimer.reset();
        }
    
    age_response.stop();
    // the Routine "age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sexMaxDurationReached;
var _sex_response_allKeys;
var sexMaxDuration;
var sexComponents;
function sexRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sex' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    sexClock.reset();
    routineTimer.reset();
    sexMaxDurationReached = false;
    // update component parameters for each repeat
    sex_response.keys = undefined;
    sex_response.rt = undefined;
    _sex_response_allKeys = [];
    psychoJS.experiment.addData('sex.started', globalClock.getTime());
    sexMaxDuration = null
    // keep track of which components have finished
    sexComponents = [];
    sexComponents.push(sex_question);
    sexComponents.push(sex_response);
    
    sexComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function sexRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sex' ---
    // get current time
    t = sexClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sex_question* updates
    if (frameN >= 0.0 && sex_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sex_question.tStart = t;  // (not accounting for frame time here)
      sex_question.frameNStart = frameN;  // exact frame index
      
      sex_question.setAutoDraw(true);
    }
    
    
    // *sex_response* updates
    if (frameN >= 0.0 && sex_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sex_response.tStart = t;  // (not accounting for frame time here)
      sex_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sex_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sex_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sex_response.clearEvents(); });
    }
    
    if (sex_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = sex_response.getKeys({keyList: ['m', 'f', 'b', 'o'], waitRelease: false});
      _sex_response_allKeys = _sex_response_allKeys.concat(theseKeys);
      if (_sex_response_allKeys.length > 0) {
        sex_response.keys = _sex_response_allKeys[_sex_response_allKeys.length - 1].name;  // just the last key pressed
        sex_response.rt = _sex_response_allKeys[_sex_response_allKeys.length - 1].rt;
        sex_response.duration = _sex_response_allKeys[_sex_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    sexComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sexRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sex' ---
    sexComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('sex.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(sex_response.corr, level);
    }
    psychoJS.experiment.addData('sex_response.keys', sex_response.keys);
    if (typeof sex_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('sex_response.rt', sex_response.rt);
        psychoJS.experiment.addData('sex_response.duration', sex_response.duration);
        routineTimer.reset();
        }
    
    sex_response.stop();
    // the Routine "sex" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var raceMaxDurationReached;
var _race_response_allKeys;
var raceMaxDuration;
var raceComponents;
function raceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'race' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    raceClock.reset();
    routineTimer.reset();
    raceMaxDurationReached = false;
    // update component parameters for each repeat
    race_response.keys = undefined;
    race_response.rt = undefined;
    _race_response_allKeys = [];
    psychoJS.experiment.addData('race.started', globalClock.getTime());
    raceMaxDuration = null
    // keep track of which components have finished
    raceComponents = [];
    raceComponents.push(race_question);
    raceComponents.push(race_response);
    
    raceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function raceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'race' ---
    // get current time
    t = raceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *race_question* updates
    if (frameN >= 0.0 && race_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      race_question.tStart = t;  // (not accounting for frame time here)
      race_question.frameNStart = frameN;  // exact frame index
      
      race_question.setAutoDraw(true);
    }
    
    
    // *race_response* updates
    if (frameN >= 0.0 && race_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      race_response.tStart = t;  // (not accounting for frame time here)
      race_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { race_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { race_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { race_response.clearEvents(); });
    }
    
    if (race_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = race_response.getKeys({keyList: ['b', 'w', 'l', 'n', 'a', 'e', 'm'], waitRelease: false});
      _race_response_allKeys = _race_response_allKeys.concat(theseKeys);
      if (_race_response_allKeys.length > 0) {
        race_response.keys = _race_response_allKeys[_race_response_allKeys.length - 1].name;  // just the last key pressed
        race_response.rt = _race_response_allKeys[_race_response_allKeys.length - 1].rt;
        race_response.duration = _race_response_allKeys[_race_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    raceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function raceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'race' ---
    raceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('race.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(race_response.corr, level);
    }
    psychoJS.experiment.addData('race_response.keys', race_response.keys);
    if (typeof race_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('race_response.rt', race_response.rt);
        psychoJS.experiment.addData('race_response.duration', race_response.duration);
        routineTimer.reset();
        }
    
    race_response.stop();
    // the Routine "race" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    thanksClock.reset();
    routineTimer.reset();
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_text);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (frameN >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }
    
    if (thanks_text.status === PsychoJS.Status.STARTED && frameN >= 600) {
      thanks_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    // the Routine "thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
