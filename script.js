// Load counter values from localStorage on page load
window.onload = function() {
    loadCounters();
};

function incrementCounter(counterNumber) {
    var counterElement = document.getElementById('counter' + counterNumber);
    var currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue + 1;
    saveCounters(); // Save counter values to localStorage
}

function decrementCounter(counterNumber) {
    var counterElement = document.getElementById('counter' + counterNumber);
    var currentValue = parseInt(counterElement.innerText);
    if (currentValue > 0) {
        counterElement.innerText = currentValue - 1;
        saveCounters(); // Save counter values to localStorage
    }
}

function saveCounters() {
    // Save counter values to localStorage
    var counters = document.querySelectorAll('.counter span');
    counters.forEach(function(counter, index) {
        localStorage.setItem('counter' + (index + 1), counter.innerText);
    });
}

function loadCounters() {
    // Load counter values from localStorage
    var counters = document.querySelectorAll('.counter span');
    counters.forEach(function(counter, index) {
        var savedValue = localStorage.getItem('counter' + (index + 1));
        if (savedValue !== null) {
            counter.innerText = savedValue;
        }
    });
}

// Automatically refresh the page after a short delay (500ms)
function refreshPage() {
    setTimeout(function() {
        location.reload();
    }, 500); // Adjust delay as needed (500ms = 0.5 seconds)
}

// Call refreshPage after every update
function incrementCounter(counterNumber) {
    var counterElement = document.getElementById('counter' + counterNumber);
    var currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue + 1;
    saveCounters(); // Save counter values to localStorage
    refreshPage(); // Refresh the page
}

function decrementCounter(counterNumber) {
    var counterElement = document.getElementById('counter' + counterNumber);
    var currentValue = parseInt(counterElement.innerText);
    if (currentValue > 0) {
        counterElement.innerText = currentValue - 1;
        saveCounters(); // Save counter values to localStorage
        refreshPage(); // Refresh the page
    }
}
