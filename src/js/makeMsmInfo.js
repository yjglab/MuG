let britishMsmInfo = {};
let louvreMsmInfo = {};
let pompidouMsmInfo = {};
let londonNatlInfo = {};
let wienMsmInfo = {};
let pradoMsmInfo = {};

export const msmInfoName = [
  britishMsmInfo,
  louvreMsmInfo,
  pompidouMsmInfo,
  londonNatlInfo,
  wienMsmInfo,
  pradoMsmInfo,
];
const pyFile = [
  "british.py",
  "louvre.py",
  "pompidou.py",
  "london_natl.py",
  "wien.py",
  "prado.py",
];

// 텍스트 가공 함수
const handleMsmData = (data) => {
  const dataStringList = [];
  let msmDataString = data.toString();
  let startIdx = 0;
  let idxOfFilter = 0;
  const FILTER = "FILTER";

  while (idxOfFilter !== -1) {
    idxOfFilter = msmDataString.indexOf(`${FILTER}`, startIdx);
    let dataString = msmDataString.slice(startIdx, idxOfFilter); // 가공안된거
    dataStringList.push(dataString);
    startIdx = idxOfFilter + `${FILTER}}`.length;
  }

  for (let i = 0; i < dataStringList.length; i += 1) {
    dataStringList[i] = dataStringList[i].split("//");
    for (let j = 0; j < dataStringList[i].length; j += 1) {
      dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n\r\n)/gm, "");
    }
    dataStringList[i] = dataStringList[i].filter((el) => el !== "");
  }

  // 텍스트 가공된 관 정보
  let processedInfoText = {
    titles: dataStringList[0],
    dates: dataStringList[1],
  };
  console.log(processedInfoText.titles);
  console.log(processedInfoText.dates);

  return processedInfoText;
};
export const makeMsmInfo = (childSpawn) => {
  for (let i = 0; i < pyFile.length; i += 1) {
    const msmData = childSpawn("python", [
      process.cwd() + `/src/pydata/${pyFile[i]}`,
    ]);
    msmData.stdout.on("data", function (data) {
      // console.log(data.toString());
      msmInfoName[i] = handleMsmData(data);
    });
    msmData.stderr.on("data", function (data) {
      // console.log(data.toString());
    });
  }
};

// export const makeMsmInfos = (
//   britishSpawn,
//   louvreSpawn,
//   pompidouSpawn,
//   londonNatlSpawn
// ) => {
//   const britishMsmData = britishSpawn("python", [
//     process.cwd() + "/src/pydata/british.py",
//   ]);
//   const louvreMsmData = louvreSpawn("python", [
//     process.cwd() + "/src/pydata/louvre.py",
//   ]);
//   const pompidouMsmData = pompidouSpawn("python", [
//     process.cwd() + "/src/pydata/pompidou.py",
//   ]);
//   const londonNatlData = londonNatlSpawn("python", [
//     process.cwd() + "/src/pydata/london_natl.py",
//   ]);

//   const handleMsmData = (data) => {
//     const dataStringList = [];
//     let msmDataString = data.toString();
//     let startIdx = 0;
//     let idxOfFilter = 0;
//     const FILTER = "FILTER";

//     while (idxOfFilter !== -1) {
//       idxOfFilter = msmDataString.indexOf(`${FILTER}`, startIdx);
//       let dataString = msmDataString.slice(startIdx, idxOfFilter); // 가공안된거
//       dataStringList.push(dataString);
//       startIdx = idxOfFilter + `${FILTER}}`.length;
//     }

//     for (let i = 0; i < dataStringList.length; i += 1) {
//       dataStringList[i] = dataStringList[i].split("//");
//       for (let j = 0; j < dataStringList[i].length; j += 1) {
//         dataStringList[i][j] = dataStringList[i][j].replace(/(\r\n\r\n)/gm, "");
//       }
//       dataStringList[i] = dataStringList[i].filter((el) => el !== "");
//     }

//     let msmInfo = {
//       titles: dataStringList[0],
//       dates: dataStringList[1],
//     };
//     console.log(msmInfo.titles);
//     console.log(msmInfo.dates);

//     return msmInfo;
//   };

//   britishMsmData.stdout.on("data", function (data) {
//     // console.log(data.toString());
//     britishMsmInfo = handleMsmData(data);
//   });
//   britishMsmData.stderr.on("data", function (data) {
//     // console.log(data.toString());
//   });

//   louvreMsmData.stdout.on("data", function (data) {
//     // console.log(data.toString());
//     louvreMsmInfo = handleMsmData(data);
//   });
//   louvreMsmData.stderr.on("data", function (data) {
//     // console.log(data.toString());
//   });

//   pompidouMsmData.stdout.on("data", function (data) {
//     // console.log(data.toString());
//     pompidouMsmInfo = handleMsmData(data);
//   });
//   pompidouMsmData.stderr.on("data", function (data) {
//     // console.log(data.toString());
//   });

//   londonNatlData.stdout.on("data", function (data) {
//     // console.log(data.toString());
//     londonNatlInfo = handleMsmData(data);
//   });
//   londonNatlData.stderr.on("data", function (data) {
//     // console.log(data.toString());
//   });
// };
