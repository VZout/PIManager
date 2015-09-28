// handles the click event, sends the query
function reboot_pi() {
   $.ajax({
      url:'reboot_pi.php',
      complete: function (response) {
          $('#output').html(response.responseText);
      },
      error: function () {
          $('#output').html('[JS]: An error has occured');
      }
  });
  return false;
}
