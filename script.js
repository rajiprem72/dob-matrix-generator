function generateAll() {

  let dob = document.getElementById("dob").value;

  if (!dob) {
    alert("Please select Date of Birth");
    return;
  }

  let parts = dob.split("-");

  let year = parts[0];
  let month = parseInt(parts[1]);
  let day = parseInt(parts[2]);

  let A = day;
  let B = month;
  let C = parseInt(year.substring(0, 2));
  let D = parseInt(year.substring(2, 4));

  let matrix = [
    [A, B, C, D],
    [D + 1, C - 1, B - 3, A + 3],
    [B - 2, A + 2, D + 2, C - 2],
    [C + 1, D - 1, A + 1, B - 1]
  ];

  let output = "";

  output += createSection(
    "Original Matrix",
    matrix,
    []
  );

  // ROWS
  for (let i = 0; i < 4; i++) {

    let cells = [];
    let total = 0;

    for (let j = 0; j < 4; j++) {
      cells.push([i, j]);
      total += matrix[i][j];
    }

    output += createSection(
      "Row " + (i + 1),
      matrix,
      cells,
      total
    );
  }

  // COLUMNS
  for (let j = 0; j < 4; j++) {

    let cells = [];
    let total = 0;

    for (let i = 0; i < 4; i++) {
      cells.push([i, j]);
      total += matrix[i][j];
    }

    output += createSection(
      "Column " + (j + 1),
      matrix,
      cells,
      total
    );
  }

  // MAIN DIAGONAL
  let diag1 = [[0,0],[1,1],[2,2],[3,3]];
  let diag1Total = 0;

  diag1.forEach(c => {
    diag1Total += matrix[c[0]][c[1]];
  });

  output += createSection(
    "Main Diagonal",
    matrix,
    diag1,
    diag1Total
  );

  // REVERSE DIAGONAL
  let diag2 = [[0,3],[1,2],[2,1],[3,0]];
  let diag2Total = 0;

  diag2.forEach(c => {
    diag2Total += matrix[c[0]][c[1]];
  });

  output += createSection(
    "Reverse Diagonal",
    matrix,
    diag2,
    diag2Total
  );

  // CORNERS
  let corners = [[0,0],[0,3],[3,0],[3,3]];
  let cornersTotal = 0;

  corners.forEach(c => {
    cornersTotal += matrix[c[0]][c[1]];
  });

  output += createSection(
    "Corner Values",
    matrix,
    corners,
    cornersTotal
  );

  // CENTRE
  let centre = [[1,1],[1,2],[2,1],[2,2]];
  let centreTotal = 0;

  centre.forEach(c => {
    centreTotal += matrix[c[0]][c[1]];
  });

  output += createSection(
    "Centre Values",
    matrix,
    centre,
    centreTotal
  );

  document.getElementById("output").innerHTML = output;
}


function createSection(title, matrix, highlightCells, total = null) {

  let html = `
    <div class="section">
      <h2>${title}</h2>
      <table>
  `;

  for (let i = 0; i < 4; i++) {

    html += "<tr>";

    for (let j = 0; j < 4; j++) {

      let highlight = highlightCells.some(
        c => c[0] === i && c[1] === j
      );

      html += `
        <td class="${highlight ? 'highlight' : ''}">
          ${matrix[i][j]}
        </td>
      `;
    }

    html += "</tr>";
  }

  html += "</table>";

  if (total !== null) {
    html += `<div class="total">Total = ${total}</div>`;
  }

  html += "</div>";

  return html;
}
