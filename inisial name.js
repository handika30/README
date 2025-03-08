function getInitials(name) {
    return name
        .split(" ") // Memisahkan nama berdasarkan spasi
        .map(word => word.charAt(0).toUpperCase()) // Mengambil huruf pertama dan ubah ke kapital
        .join(""); // Menggabungkan hasilnya
}

// Contoh penggunaan
console.log(getInitials("Handika sti")); // Output: HS

