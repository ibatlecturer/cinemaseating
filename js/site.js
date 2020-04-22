$(function () {

    console.log(`Jquery is loaded`)

    // Add a click event handler to a seat

    $('.seat').on('click', function () {
        const numberOfSeatsToBook = 2;
        showConsoleMessage(`Box is clicked`)

        // Is this seat taken and if so don't do anything    
        if ($(this).hasClass('reserved')) {
            showConsoleMessage(`Seat is reserved`)
            return;
        }

        // Change style to show it is selected

        if ($(this).hasClass('selected')) {

            $(this).removeClass('selected');
        } else {
            const countSeatsSelected = $('.selected').length;
            showConsoleMessage(`Seats selected: ${countSeatsSelected}`)
            if (countSeatsSelected < numberOfSeatsToBook) {
                $(this).addClass('selected');
            }
        }

        // Show the seat number selected

        const row = $(this).data('row');
        const col = $(this).data('col');

        showConsoleMessage(`Row is ${row} and col is ${col}`)



    });
})

function showConsoleMessage(message) {

    console.log(message)
}