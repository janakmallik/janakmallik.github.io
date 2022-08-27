    // <script>

      onload = function () {
        startTime();
      };

      function startTime() {
        const today = new Date();
        // let h = today.getHours();
        // let m = today.getMinutes();
        // let s = today.getSeconds();

        var dy = new Date();
        var n = dy.toLocaleString([], { hour: "2-digit", minute: "2-digit" });
        document.getElementById("demo_tt12").innerHTML = n;

        // var nn = dy.toLocaleString([], { hour: "2-digit", minute: "2-digit" });
        // document.getElementById("time_l").innerHTML = nn;
        // m = checkTime(m);
        // s = checkTime(s);
        // document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
      };

      //   function checkTime(i) {
      //     if (i < 10) {
      //       i = "0" + i;
      //     } // add zero in front of numbers < 10
      //     return i;
      //   }
    // </script>


    // <script>

    const weekdayx = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const month_namex = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dx = new Date();
    let datex = dx.getDate();
    let dayx = weekdayx[dx.getDay()];
    let yearx = dx.getFullYear();
    let monthx = month_namex[dx.getMonth()];

    document.getElementById("demo_xx").innerHTML =
      dayx + ", " + datex + " " + monthx + " " + yearx;
//   </script>