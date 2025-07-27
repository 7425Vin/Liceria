    // Database barang yang bisa dibeli
        const itemsDatabase = [
            {
                name: "Boneka",
                price: 50000,
                image: "images/boneka.jpg",
                alt: "Boneka lucu"
            },
            {
                name: "Pulpen",
                price: 2000,
                image: "images/pulpen.jpg",
                alt: "pulpen tinta hitam"
            },
            {
                name: "Pensil",
                price: 2000,
                image: "images/pensil.jpg",
                alt: "pensil"
            },
            {
                name: "Penghapus",
                price: 2000,
                image: "images/penghapus.jpg",
                alt: "penghapus"
            },
            {
                name: "Kotak Pensil",
                price: 10000,
                image: "images/kotak-pensil.jpg",
                alt: "kotak pensil"
            },
            {
                name: "Kotak Pensil Warna Warni",
                price: 25000,
                image: "images/kotak-pensil-warna.jpg",
                alt: "kotak pensil warna warni"
            },
            {
                name: "Buku Tulis",
                price: 2500,
                image: "images/buku-tulis.jpg",
                alt: "Buku tulis"
            },
            {
                name: "Tipex",
                price: 3000,
                image: "images/tipex.jpg",
                alt: "tipex"
            },
            {
                name: "Pensil Warna",
                price: 20000,
                image: "images/pensil_warna.jpg",
                alt: "pensil warna"
            },
            {
                name: "Krayon",
                price: 20000,
                image: "images/krayon.jpg",
                alt: "krayon"
            },
            {
                name: "Mainan Lego",
                price: 5000,
                image: "images/lego.jpg",
                alt: "lego"
            },
            {
                name: "Mainan Action Figure",
                price: 8000,
                image: "images/action-figure.jpg",
                alt: "action figure"
            },
            {
                name: "Mainan Barbie",
                price: 25000,
                image: "images/barbie.jpg",
                alt: "Boneka barbie"
            },
            {
                name: "Mainan Beyblade",
                price: 25000,
                image: "images/beyblade.jpg",
                alt: "Mainan Beyblade"
            },
            {
                name: "Mainan Hot Wheels",
                price: 20000,
                image: "images/hot-wheels.jpg",
                alt: "Mainan Hot Wheels"
            },
            {
                name: "Mainan Robot Gundam",
                price: 100000,
                image: "images/gundam.jpg",
                alt: "Mainan gundam rx 78-2"
            },
            {
                name: "Tas Sekolah",
                price: 150000,
                image: "images/tas-sekolah.jpg",
                alt: "Tas sekolah warna cream dengan beberapa kantong dan tali yang bisa disesuaikan"
            },
            {
                name: "Sepatu Olahraga",
                price: 500000,
                image: "images/sepatu-olahraga.jpg",
                alt: "Sepatu olahraga modern dengan sol karet berwarna putih dan biru"
            },
            {
                name: "Sepatu Sekolah",
                price: 250000,
                image: "images/sepatu-sekolah-hitam-putih-1.jpg",
                alt: "Sepatu sekolah modern dengan warna hitam dan putih"
            },
            {
                name: "Smartphone",
                price: 3000000,
                image: "images/smartphone.jpg",
                alt: "Smartphone layar sentuh dengan kamera ganda dan warna metalik"
            },
            {
                name: "Laptop",
                price: 5000000,
                image: "images/laptop.jpg",
                alt: "Laptop gaming berwarna hitam dengan layar 14 inci dan keyboard backlit"
            },
            {
                name: "Sepeda",
                price: 2500000,
                image: "images/sepeda.jpg",
                alt: "Sepeda gunung dengan rangka hitam dan ban lebar untuk medan berat"
            },
            {
                name: "TV LED",
                price: 4000000,
                image: "images/tv-led.jpg",
                alt: "TV LED 50 inci dengan layar datar dan remote control"
            }
        ];

        // Variabel untuk menyimpan pilihan user
        let selectedAmount = 0;
        let selectedInterval = '';
        let selectedDuration = 1;
        let selectedDurationUnit = 'days';

        // Fungsi untuk memformat angka ke format Rupiah
        function formatRupiah(amount) {
            return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        // Fungsi untuk menghitung total tabungan
        function calculateTotalSaving() {
            if (!selectedAmount || !selectedInterval) {
                alert('Pilih dulu berapa uang dan kapan mau menabungnya ya!');
                return;
            }

            // Hitung total hari berdasarkan durasi dan unit
            let totalDays = selectedDuration;
            
            if (selectedDurationUnit === 'weeks') {
                totalDays = selectedDuration * 7;
            } else if (selectedDurationUnit === 'months') {
                totalDays = selectedDuration * 30;
            } else if (selectedDurationUnit === 'years') {
                totalDays = selectedDuration * 365;
            }

            // Hitung jumlah interval berdasarkan pilihan
            let intervalCount = 0;
            
            if (selectedInterval === 'day') {
                intervalCount = totalDays;
            } else if (selectedInterval === 'week') {
                intervalCount = Math.floor(totalDays / 7);
            } else if (selectedInterval === 'month') {
                intervalCount = Math.floor(totalDays / 30);
            }

            const totalSaving = selectedAmount * intervalCount;
            
            if (totalSaving <= 0) {
                alert('Wah, sepertinya ada yang belum diisi dengan benar. Pastikan semua pilihan sudah dipilih dan durasi lebih dari 0 ya!');
                return undefined;
            }
            return totalSaving;
        }

        // Fungsi untuk menampilkan hasil
        function showResult(totalSaving) {
            document.getElementById('result-section').classList.remove('hidden');
            document.getElementById('total-saving').textContent = formatRupiah(totalSaving);

            // Konversi teks dari interval dan unit
            const intervalLabel = {
                day: "setiap hari",
                week: "setiap minggu",
                month: "setiap bulan"
            }[selectedInterval] || selectedInterval;

            const unitLabel = {
                days: "hari",
                weeks: "minggu",
                months: "bulan",
                years: "tahun"
            }[selectedDurationUnit] || selectedDurationUnit;

            const summaryText = `Kamu memilih menabung ${formatRupiah(selectedAmount)} ${intervalLabel} selama ${selectedDuration} ${unitLabel}.`;
            document.getElementById('summary-text').textContent = summaryText;

            // Tampilkan barang yang bisa dibeli
            const itemsGrid = document.getElementById('items-grid');
            itemsGrid.innerHTML = '';

            const affordableItems = itemsDatabase
                .filter(item => item.price <= totalSaving)
                .sort((a, b) => a.price - b.price); // urutkan dari harga termurah


            if (affordableItems.length === 0) {
                itemsGrid.innerHTML = '<p class="col-span-3 text-center py-4">Wah, uangmu belum cukup. Ayo tabung lagi ya!</p>';
            } else {
                affordableItems.forEach(item => {
                    const itemCard = document.createElement('div');
                    itemCard.className = 'item-card bg-white rounded-lg overflow-hidden shadow-md';

                    itemCard.innerHTML = `
                        <img src="${item.image}" alt="${item.alt}" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="font-semibold">${item.name}</h3>
                            <p class="text-gray-600">${formatRupiah(item.price)}</p>
                            <div class="mt-2 text-sm text-green-600 font-medium">✅ Hebat! Tabunganmu nanti akan cukup buat beli ini!</div>
                        </div>
                    `;

                    itemsGrid.appendChild(itemCard);
                });
            }
        }


        // Event listeners
        document.querySelectorAll('.amount-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('bg-green-200'));
                this.classList.add('bg-green-200');
                selectedAmount = parseInt(this.dataset.amount);
            });
        });

        document.querySelectorAll('.interval-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.interval-btn').forEach(b => b.classList.remove('bg-green-200'));
                this.classList.add('bg-green-200');
                selectedInterval = this.dataset.interval;
            });
        });

        document.getElementById('duration').addEventListener('change', function() {
            const value = parseInt(this.value);
            if (value <= 0) {
                alert('Waduh! Masukkan angka lebih dari 0 ya!');
                this.value = 1;
                selectedDuration = 1;
            } else {
                selectedDuration = value;
            }
        });

        document.getElementById('duration-unit').addEventListener('change', function() {
            selectedDurationUnit = this.value;
        });

        document.getElementById('calculate-btn').addEventListener('click', function() {
            const totalSaving = calculateTotalSaving();
            if (totalSaving !== undefined && totalSaving > 0) {
                showResult(totalSaving);
            }
        });

        // Inisialisasi pilihan default
        document.querySelector('.amount-btn[data-amount="5000"]').click();
        document.querySelector('.interval-btn[data-interval="week"]').click();