function generateMatrix() {

  let dob = document.getElementById("dob").value;

  if (!dob) {
    alert("Please select DOB");
    return;
  }

  let parts = dob.split("-");

  let year = parts[0];
  let month = parseInt(parts[1]);
  let day = parseInt(parts[2]);

  let A = day;
  let B = month;
  let C = parseInt(year.substring(0,2));
  let D = parseInt(year.substring(2,4));

  let matrix = [
    [A, B, C, D],
    [D+1, C-1, B-3, A+3],
    [B-2, A+2, D+2, C-2],
    [C+1, D-1, A+1, B-1]
  ];

  let html = "<table>";

  for(let i=0;i<4;i++) {
    html += "<tr>";

    for(let j=0;j<4;j++) {
      html += "<td>" + matrix[i][j] + "</td>";
    }

    html += "</tr>";
  }

  html += "</table>";

  document.getElementById("output").innerHTML = html;
}
