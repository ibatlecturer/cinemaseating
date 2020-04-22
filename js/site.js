$(function () {

    const rows = 20;
    const cols = 10;
    generateSeating(rows, cols);
    console.log(`Jquery is loaded`)

    // Add a click event handler to a seat

    $('.seat').on('click', function () {
        const numberOfSeatsToBook = 12;
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

        showSeatsBooked()

    });
})



function showSeatsBooked() {

    const count = $(".selected").length;
    var seatingMessage = [];
    $(".selected").each(function (index) {
        const row = $(this).data('row');
        const col = $(this).data('col');
        seatingMessage.push(`[${row},${col}]`);
    });


    if (count > 0) {
        $("#seatsBooked").html(`Total Seats Booked: ${count} :  ${seatingMessage.join(' ')}`)
    } else {
        $("#seatsBooked").html(`No seats booked`)
    }
}

function showConsoleMessage(message) {

    console.log(message)
}


function generateSeating(rows, cols) {

    // Write a loop that outputs a list of divs to represent seats

    for (i = 0; i < rows; i++) {

        for (j = 0; j < cols; j++) {
            var seatingString = generateSeat('available', i, j);
            if (j == cols-1) {

                var seatingString = "<div class='clear'></div>"
            }

            $('#seatingArea').append(seatingString);

        }

    }


}

function generateSeat(extraClass, rowNo, colNo) {

    return `<div class='seat ${extraClass}' data-row='${rowNo}'  data-col='${colNo}'>${rowNo},${colNo}</div>`;

}