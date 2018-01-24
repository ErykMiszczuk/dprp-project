"use strict";

// DataTransfer is used to transfer data (JSON) from and to server, using
// native browsers Fetch API.

/**
 * Get json with all users
*/
function fetchAllUsers() {
  let customHeader = new Headers();
  customHeader.append('x-access-token', window.localStorage.getItem('token'));
  let fetchIni = {
    method: 'GET',
    headers: customHeader,
  }
  fetch("/api/getusers/20", fetchIni)
  .then((res) => res.json())
  .then(
    data => {
      console.log(data);
      renderUsers(data);
    }
  )
}

function fetchAllTradenotes() {
  let customHeader = new Headers();
  customHeader.append('x-access-token', window.localStorage.getItem('token'));
  let fetchIni = {
    method: 'GET',
    headers: customHeader,
  }
  fetch("/api/getnotes", fetchIni)
  .then((res) => res.json())
  .then(
    data => {
      console.log(data);
      renderTradenotes(data);
    }
  )
}

function fetchAllRoles() {
  let customHeader = new Headers();
  customHeader.append('x-access-token', window.localStorage.getItem('token'));
  let fetchIni = {
    method: 'GET',
    headers: customHeader,
  }
  fetch("/api/getroles", fetchIni)
  .then((res) => res.json())
  .then(
    data => {
      console.log(data);
      renderRoles(data);
    }
  )
}

function fetchAllOperators() {
  let customHeader = new Headers();
  customHeader.append('x-access-token', window.localStorage.getItem('token'));
  let fetchIni = {
    method: 'GET',
    headers: customHeader,
  }
  fetch("/api/getoperators", fetchIni)
  .then((res) => res.json())
  .then(
    data => {
      console.log(data);
      renderOperators(data);
    }
  )
}

function fetchAllIndustries() {
  let customHeader = new Headers();
  customHeader.append('x-access-token', window.localStorage.getItem('token'));
  let fetchIni = {
    method: 'GET',
    headers: customHeader,
  }
  fetch("/api/getindustries", fetchIni)
  .then((res) => res.json())
  .then(
    data => {
      console.log(data);
      renderIndustries(data);
    }
  )
}

function fetchAllClients() {
  let customHeader = new Headers();
  customHeader.append('x-access-token', window.localStorage.getItem('token'));
  let fetchIni = {
    method: 'GET',
    headers: customHeader,
  }
  fetch("/api/getclients", fetchIni)
  .then((res) => res.json())
  .then(
    data => {
      console.log(data);
      renderClients(data);
    }
  )
}
  
function intializeConnection() {
  console.log("DataTransfer intializeConnection");
  let usrLoginHtml = document.querySelector('.usr_login');
  usrLoginHtml.innerHTML = window.localStorage.getItem('login');
  let getUsersBtn = document.querySelector('.item__button--getUsers');
  getUsersBtn.addEventListener("click", fetchAllUsers);
  let getTradenotesBtn = document.querySelector('.item__button--getTradenotes');
  getTradenotesBtn.addEventListener("click", fetchAllTradenotes);
  let getRolesBtn = document.querySelector('.item__button--getRoles');
  getRolesBtn.addEventListener("click", fetchAllRoles);
  let getOperatorsBtn = document.querySelector('.item__button--getOperators');
  getOperatorsBtn.addEventListener("click", fetchAllOperators);
  let getIndustriesBtn = document.querySelector('.item__button--getIndustries');
  getIndustriesBtn.addEventListener("click", fetchAllIndustries);
  let getClientsBtn = document.querySelector('.item__button--getClients');
  getClientsBtn.addEventListener("click", fetchAllClients);
  let logout = document.querySelector('.nav_list__item__logout');
  logout.addEventListener("click", usrLogout);
}

function usrLogout() {
  window.localStorage.removeItem('login');
  window.localStorage.removeItem('token');
  window.location.href = "/login.html";
}

function renderUsers(users) {
  let result = document.querySelector('.spa_content__result');
  result.innerHTML = "";
  let html = '<table class="spa_content__table">';
  users.forEach(function(user) {
    html += `<tr class="table__userData"><td class="userData__firstName">${user.firstName}</td><td class="userData__lastName">${user.lastName}</td><td class="userData__login">${user.login}</td></tr>`;
  }, this);
  html += '</table><button onclick="showAddUserModal()" class="spa_content__addbutton -addUsers">+</button>'
  result.innerHTML = html;
}

function renderTradenotes(notes) {
  let result = document.querySelector('.spa_content__result');
  result.innerHTML = "";
  let html = '<table class="spa_content__table">';
  notes.forEach(function(note) {
    html += `<tr class="table__noteData"><td class="noteData__id">${note.id}</td><td class="noteData__text">${note.content}</td><td class="noteData__client">${note.clientId}</td><td class="noteData__user">${note.userId}</td></tr>`;
  }, this);
  html += '</table><button onclick="showAddTradenoteModal()" class="spa_content__addbutton -addTradenotes">+</button>'
  result.innerHTML = html;
}

function renderRoles(roles) {
  let result = document.querySelector('.spa_content__result');
  result.innerHTML = "";
  let html = '<table class="spa_content__table">';
  roles.forEach(function(role) {
    html += `<tr class="table__roleData"><td class="roleData__id">${role.id}</td><td class="roleData__lastName">${role.name}</td></tr>`;
  }, this);
  html += '</table>'
  result.innerHTML = html;
}

function renderOperators(operators) {
  let result = document.querySelector('.spa_content__result');
  result.innerHTML = "";
  let html = '<table class="spa_content__table">';
  operators.forEach(function(operator) {
    html += `<tr class="table__operatorData"><td class="operatorData__firstName">${operator.firstName}</td><td class="operatorData__lastName">${operator.lastName}</td><td class="operatorData__email">${operator.email}</td><td class="operatorData__phoneNumber">${operator.phoneNumber}</td><td class="operatorData__position">${operator.position}</td></tr>`;
  }, this);
  html += '</table><button class="spa_content__addbutton -addOperators">+</button>'
  result.innerHTML = html;
}

function renderIndustries(industries) {
  let result = document.querySelector('.spa_content__result');
  result.innerHTML = "";
  let html = '<table class="spa_content__table">';
  industries.forEach(function(industry) {
    html += `<tr class="table__industryData"><td class="industryData__firstName">${industry.id}</td><td class="industryData__lastName">${industry.industryType}</td></tr>`;
  }, this);
  html += '</table><button class="spa_content__addbutton -addIndustries">+</button>'
  result.innerHTML = html;
}

function renderClients(clients) {
  let result = document.querySelector('.spa_content__result');
  result.innerHTML = "";
  let html = '<table class="spa_content__table">';
  clients.forEach(function(client) {
    html += `<tr class="table__clientData"><td class="clientData__clientName">${client.clientName}</td><td class="clientData__nip">${client.nip}</td><td class="clientData__address">${client.address}</td><td class="clientData__city">${client.city}</td></tr>`;
  }, this);
  html += '</table><button class="spa_content__addbutton -addClients">+</button>'
  result.innerHTML = html;
}

function showAddUserModal() {
  let html = `<div class="spa_content__adduser_modal">
  <form class="spa_content__adduser_modal__form">
    <label for="modal__username"><p>Username</p><input type="text" name="username" id="modal__username"></label>
    <label for="modal__lastname"><p>Lastname</p><input type="text" name="lastname" id="modal__lastname"></label>
    <label for="modal__dateofbirth"><p>Date of birth</p><input type="date" name="dateofbirth" id="modal__dateofbirth"></label>
    <label for="modal__login"><p>Login</p><input type="text" name="login" id="modal__login"></label>
    <label for="modal__password"><p>Password</p><input type="password" name="password" id="modal__password"></label>
    <input type="button" value="Wyślij" id="modal__submit">
  </form>
  </div>`;

  let resultArea = document.querySelector('.spa_content__result');
  resultArea.innerHTML = html;
  let addUserModalSubmitButton = document.querySelector('#modal__submit');
  addUserModalSubmitButton.addEventListener("click", addUser);
}

function showAddTradenoteModal() {
  let selectClient = "";
  selectClient += '<select id="modal__select">';
  let customHeader = new Headers();
  customHeader.append('x-access-token', window.localStorage.getItem('token'));
  let fetchIni = {
    method: 'GET',
    headers: customHeader,
  }
  fetch("/api/getclients", fetchIni)
  .then((res) => res.json())
  .then(
    data => {
      data.forEach(client => {
        selectClient += `<option value="${client.id}">${client.clientName}</option>`;
      });
      selectClient += `</select>`;
      let html1 = `<div class="spa_content__add_modal">
      <form class="spa_content__addtradenote_modal__form">
        <label for="modal__tradenote"><p>Tradenote content</p><textarea name="username" id="modal__tradenote"></textarea></label>
        <label for="modal__client"></label>`;
      let html2 = `<input type="button" value="Wyślij" id="modal__submit">
      </form>
      </div>`;
    
      let resultArea = document.querySelector('.spa_content__result');
      resultArea.innerHTML = html1 + selectClient + html2;
      let addUserModalSubmitButton = document.querySelector('#modal__submit');
      addUserModalSubmitButton.addEventListener("click", addTradenote);
    }
  )
}

function addTradenote() {
  let tradenoteValue = document.getElementById('modal__tradenote').value;
  // let selectValue = document.querySelector('#modal__select').value;
  let customHeader = new Headers();
  customHeader.append('Content-Type', 'application/x-www-form-urlencoded');
  customHeader.append('x-access-token', window.localStorage.getItem('token'));
  let body = `note=${tradenoteValue}`;
  let fetchIni = {
    method: 'POST',
    headers: customHeader,
    body: body
  }
  
  fetch('/api/addnote', fetchIni).then(
    res => {
      console.log('New note added');
      fetchAllTradenotes();
    }
  )
}

function addUser() {
  let usernameValue = document.getElementById('modal__username').value;
  let lastnameValue = document.getElementById('modal__lastname').value;
  let dateofbirthValue = document.getElementById('modal__dateofbirth').value;
  let loginValue = document.getElementById('modal__login').value;
  let passwordValue = document.getElementById('modal__password').value;
  console.log(passwordValue);
  let customHeader = new Headers();
  customHeader.append('Content-Type', 'application/x-www-form-urlencoded');
  customHeader.append('x-access-token', window.localStorage.getItem('token'));
  let body = `name=${usernameValue}&lastname=${lastnameValue}&dateofbirth=${dateofbirthValue}&login=${loginValue}&password=${passwordValue}`;
  let fetchIni = {
    method: 'POST',
    headers: customHeader,
    body: body
  }
  
  fetch('/api/adduser', fetchIni).then(
    res => {
      console.log('New user added');
      fetchAllUsers();
    }
  )

}

// Loading library after loading all elements in html
window.addEventListener("DOMContentLoaded", intializeConnection);
