// A simple way to fetch data quickly if we need

/*
async function getData() {
  const blob = await fetch(endpoint);
  const payload = await blob.json();
  console.log(payload);
  return payload;
}
*/

// jQuery version
/*
function successCallback(response) {
  // do something with the data
}

function errorCallback(request, status, error) {
  // do something with the error
}

// perform an ajax http get request
$.ajax({
  url: 'http://localhost:8080/api/users',
  async: true,
  success: successCallback,
  error: errorCallback
});
*/
