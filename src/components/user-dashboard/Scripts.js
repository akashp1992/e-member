const Scripts = (callback) => {
  // const LibScript = document.getElementById("libscripts");
  // const VendorScript = document.getElementById("verdorscript");
  // const MainScript = document.getElementById("mainscript");
  const ChartistScript = document.getElementById("chartistscript");
  // const ChartScript = document.getElementById("chartscript");
  // if (!LibScript) {
  //   const script = document.createElement("script");
  //   script.src = "../../../public/assets/bundles/libscripts.bundle.js";
  //   script.id = "libscripts";
  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     if (callback) callback();
  //   };
  // }

  // if (!VendorScript) {
  //   const script = document.createElement("script");
  //   script.src = "../../../public/assets/bundles/vendorscripts.bundle.js";
  //   script.id = "vendorscript";

  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     if (callback) callback();
  //   };
  // }

  // if (!MainScript) {
  //   const script = document.createElement("script");
  //   script.src = "../../../public/assets/bundles/mainscripts.bundle.js";
  //   script.id = "mainscript";

  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     if (callback) callback();
  //   };
  // }

  if (!ChartistScript) {
    const script = document.createElement("script");
    script.src = "../../../public/assets/bundles/chartist.bundle.js";
    script.id = "chartistscript";

    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }

  // if (!ChartScript) {
  //   const script = document.createElement("script");
  //   script.src = "../../../public/assets/js/chartjs.js";
  //   script.id = "chartscript";

  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     if (callback) callback();
  //   };
  // }
  // if (LibScript && callback) callback();
  // if (VendorScript && callback) callback();
  // if (MainScript && callback) callback();
  if (ChartistScript && callback) callback();
  // if (ChartScript && callback) callback();
};

export default Scripts;
