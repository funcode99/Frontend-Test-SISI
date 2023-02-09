<script setup>
</script>

<template>
    <div>
        <section class="flex flex-col bg-transparent min-h-[100vh] min-w-0">
            <main class="flex-auto min-h-0">
                <div class="bg-[#f2f4f8] w-full min-h-[100vh]">

                    <div class="flex flex-row flex-wrap items-center text-center row">
                        
                        <div class="bg-[#B20838] bg-[url('/src/assets/background_left_login.webp')] h-[100vh] max-w-[50%] pt-[2rem] basis-1/2 relative inline-block">

                            <img src="@/assets/meeting-cuate.webp" class="h-[40rem] max-w-[100%] border-none align-middle" alt="">

                        </div>
                        
                        <div class=" basis-1/2 max-w-[50%] relative">

                            <div class="px-3">

                                <div class="">

                                    <div class="right_side">

                                        <div class="bg-[url('/src/assets/background_right_bottom_login.png')] bg-no-repeat bg-right-bottom h-[98vh] mx-[-15px] flex flex-wrap text-center">

                                            <div class="basis-1/6 max-w-[17%]"></div>

                                            <div class="basis-4/6 max-w-[67%] relative w-[100%] px-[15px] text-center">

                                                <div class="card relative pt-[4px] mb-[2rem] shadow-lg flex flex-col min-w-0 items-center rounded-[0.25rem] before:absolute before:top-0 before:left-0 before:right-0 before:h-[4px] before:overflow-hidden before:rounded-t-[6px] before:content-['']">

                                                    <div class="card-body flex-auto bg-transparent px-[1.33rem] py-[1.66rem]">
                                                        <img src="@/assets/card_body_image.webp" width="140" alt="">
                                                        <form class="m-0 p-0 text-[14px] mb-4 text-[#141322]">

                                                            <div class="ant-row flex flex-col flex-row flex-wrap min-h-[32px]">
                                                                <div class="ant-col">
                                                                    <div class="ant-form">
                                                                        <div class="ant-form-content">
                                                                            <span class="input-username before:w-0 before:invisible before:content-['\a0']">
                                                                                <span class="prefix-input flex items-center text-[#141322]">
                                                                                    <span>
                                                                                        <i class="fa fa-user o"></i>
                                                                                    </span>
                                                                                </span>
                                                                                <input type="text" placeholder="Nama Pengguna" class="p-0 border-none m-0 relative w-[100%] inline-block rounded-[8px] text-ellipsis">
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                
                                                            </div>

                                                            <button>
                                                                Masuk
                                                            </button>

                                                        </form>
                                                        <div class="text-center mt-3 mb-auto">
                                                            <a href="" class="#a7a5b1"><span>Kembali ke beranda</span></a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="basis-1/6 max-w-[17%]"></div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </section>
    </div>
</template>

<style>

    .card {
        box-shadow: 0 4px 10px 0 rgb(20 19 34 / 3%), 0 0 10px 0 rgb(20 19 34 / 2%);
    }

    .row {
        row-gap: 0px;
    }
</style>