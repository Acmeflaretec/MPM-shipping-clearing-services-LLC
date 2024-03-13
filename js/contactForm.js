// const scriptURL = 'https://script.google.com/macros/s/AKfycbx2wkUMkh8kg5Q1D0mGTb5O3H5J5DRZauQr7mKtCl_Ye30Z6Nf3zchc8Ck9uMdks64j/exec'
// const form = document.forms['contactForm'] // Update form name if necessary
// const loader = document.getElementById('loader');

// form.addEventListener('submit', e => {
  
//     e.preventDefault();
//     loader.style.display = 'block'; // Show loading spinner

//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => {
//             loader.style.display = 'none'; // Hide loading spinner
//             if (response.ok) {
//                 // console.log('Success!', response);
//                 // Optionally, you can reset the form after successful submission
//                 form.reset();
//                 setTimeout(() => {
//                   showAlert("Success! We will connect with you soon.")
//               },2000);

//             } else {
//                 console.error('Error!', response.statusText);
//                 showAlert('Please try again.');
//                 // You might want to provide user feedback here
//             }
//         })
//         .catch(error => {
//             console.error('Error!', error.message);
//             // You might want to provide user feedback here
//         });
// });

// function showAlert(a) {
//     alert(a);
// }
const scriptURL = 'https://script.google.com/macros/s/AKfycbx2wkUMkh8kg5Q1D0mGTb5O3H5J5DRZauQr7mKtCl_Ye30Z6Nf3zchc8Ck9uMdks64j/exec';
const form = document.forms['contactForm']; // Update form name if necessary
const loader = document.getElementById('loader');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', e => {
    e.preventDefault();

    const phoneInput = document.getElementById('phone');
    const phoneNumber = phoneInput.value.trim();

    // Checking if the phone number field is filled out and valid
    if (validatePhoneNumber(phoneNumber)) {
        // Proceed with form submission
        loader.style.display = 'block'; // Show loading spinner

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                loader.style.display = 'none'; // Hide loading spinner
                if (response.ok) {
                    form.reset();
                    showAlert("Success! We will connect with you soon.");
                } else {
                    console.error('Error!', response.statusText);
                    showAlert('Please try again.');
                    // You might want to provide user feedback here
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                showAlert('An error occurred. Please try again later.');
                // You might want to provide user feedback here
            });
    } else {
        showAlert('Please fill out the phone number field with a valid phone number.');
        // You might want to provide user feedback here
    }
});

// Phone number validation function
function validatePhoneNumber(phoneNumber) {
    // Regular expression to match phone numbers with optional country code
    // It allows for an optional "+" followed by one or more digits for the country code,
    // followed by the remaining digits for the phone number.
    return /^\+?\d{1,3}\d{1,14}$/.test(phoneNumber);
}

// Add event listener to check phone number validity on input change
form.addEventListener('input', function() {
    const phoneInput = document.getElementById('phone');
    const phoneNumber = phoneInput.value.trim();
    submitButton.disabled = !validatePhoneNumber(phoneNumber);
});

function showAlert(message) {
    alert(message);
}

