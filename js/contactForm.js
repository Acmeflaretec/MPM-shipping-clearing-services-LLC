const scriptURL = 'https://script.google.com/macros/s/AKfycbx2wkUMkh8kg5Q1D0mGTb5O3H5J5DRZauQr7mKtCl_Ye30Z6Nf3zchc8Ck9uMdks64j/exec'
const form = document.forms['contactForm'] // Update form name if necessary
const loader = document.getElementById('loader');

form.addEventListener('submit', e => {
  
    e.preventDefault();
    loader.style.display = 'block'; // Show loading spinner

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            loader.style.display = 'none'; // Hide loading spinner
            if (response.ok) {
                // console.log('Success!', response);
                // Optionally, you can reset the form after successful submission
                form.reset();
                setTimeout(() => {
                  showAlert("Success! We will connect with you soon.")
              },2000);

            } else {
                console.error('Error!', response.statusText);
                showAlert('Please try again.');
                // You might want to provide user feedback here
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            // You might want to provide user feedback here
        });
});

function showAlert(a) {
    alert(a);
}