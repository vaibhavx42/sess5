document.getElementById('getDetail').addEventListener('click', getApi);
function getApi() {
  var userno = document.getElementById('randno').value;
  const url = `http://localhost:4000/employees/${userno}`;
  let output = ``;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output = `
            <div style="flex: auto;">
                <table border="2">
                    <tr>
                      <th>Full Name</th>
                      <th>Salary</th>
                      <th>Age</th>
                      <th>Phone</th>
                    </tr>
                    <tr>
                      <td>${data["emp_name"]}</td>
                      <td>${data["emp_salary"]}</td>
                      <td>${data["emp_age"]}</td>
                      <td>${data["emp_phone"]}</td>
                    </tr>
                  </table>
            </div>
                `;
      document.getElementById('output').innerHTML = output;
    }).catch((err) => console.log(err))
}