
function getTodos() {
    axios
        .get('https://random-data-api.com/api/users/random_user', {
            timeout: 5000
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}


function addTodo() {
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New Todo',
            completed: false
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}

function showOutput(res) {
    document.getElementById('res').innerHTML = `
  <div class="card-body">
  <div class="container">
		<div class="main-body">
			<div class="row">
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
								<img src="https://i.pravatar.cc/" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
								<div class="mt-3">
									<h4>${res.data.first_name} ${res.data.last_name}  </h4>
                                    <center>
                                    <p class="text-muted font-size-sm">${res.data.employment.title} </p>
                                    </center>
                                    <p class="text-muted font-size-sm"><b>Country :</b> ${res.data.address.country} </p>
									<p class="text-muted font-size-sm"><b>City :</b> ${res.data.address.city} </p>
                                    <p class="text-muted font-size-sm"><b>Street Address :</b> ${res.data.address.street_address} </p>
								</div>
							</div>
							<hr class="my-4">
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<div class="card">
						<div class="card-body">
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Username</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="${res.data.username}">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="${res.data.email}">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Phone</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="${res.data.phone_number}">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" value="${res.data.address.street_address}">
								</div>
							</div>
							<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-primary px-4" value="Save Changes">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
`;
}

document.getElementById('get').addEventListener('click', getTodos);
