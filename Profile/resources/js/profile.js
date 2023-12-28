<div class="text-right mt-3">
    <button type="button" class="btn btn-primary" id="saveChanges">Save changes</button>&nbsp;
    <button type="button" class="btn btn-danger" id="back">Back</button>
</div>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
    $(document).ready(function () {
        // Tangani klik pada tombol "Back"
        $("#back").click(function () {
            window.location.href = "../dashboard_fikri/index.html";
        });

        // Tangani klik pada tombol "Save Changes"
        $("#saveChanges").click(function () {
            // Ambil data yang ingin Anda simpan, misalnya dari formulir
            var formData = {
                // Sesuaikan dengan data yang ingin Anda simpan
                // Contoh: name: $("#name").val(),
                //        email: $("#email").val(),
            };

            // Kirim data ke server
            $.ajax({
                url: "{{ route('update.profile') }}", // Sesuaikan dengan URL rute yang sesuai
                type: 'POST',
                data: formData,
                success: function (response) {
                    // Handle response dari server jika diperlukan
                    console.log(response);
                    alert('Perubahan berhasil disimpan!');
                },
                error: function (xhr, status, error) {
                    // Handle error jika diperlukan
                    console.error(xhr.responseText);
                }
            });
        });
    });
</script>
