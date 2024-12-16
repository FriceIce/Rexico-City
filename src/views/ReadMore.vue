<template>
  <section class="text-white max-w-[960px] w-[90%] mx-auto">
    <div class="p-4">
      <header
        class="space-y-6 bg-[#073024] text-center max-w-[640px] w-[90%] p-6 mx-auto my-10 md:my-16 rounded shadow-xl"
      >
        <h1 class="text-[30px] md:text-[50px] font-bold">About Rexico City</h1>
        <p class="text-base, text-xl">
          On this page, we have gathered season passes, tickets, and experiences for an epic day at
          Rexico city.
        </p>
        <p class="text-base, text-xl">
          Rexico City is a Epic Jungle Adventurer with the last living dinosaur of our time
        </p>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold">
            By navigation through our buttons you can see tickets, calender days and search
          </h3>
          <div class="">
            <p>We have different offers for every season</p>
          </div>
        </div>
      </header>
      <div class="space-y-[100px]">
        <div class="">
          <nav class="info-navigation">
            <router-link to="/calendar">
              <button>Calendar</button>
            </router-link>
            <router-link to="/tickets">
              <button>Tickets</button>
            </router-link>
            <router-link to="/search">
              <button>Search</button>
            </router-link>
          </nav>
        </div>
        <div class="w-full">
          <TicketsLayout />
        </div>
        <div>
          <section class="text-white mt-20" id="contact">
            <h2 class="text-4xl font-bold text-white text-center mb-4 px-4 xl:pl-16">
              Contact Rexico for futher questions
            </h2>
            <div
              class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8"
              data-aos="zoom-in-up"
            >
              <div>
                <p class="text-white">
                  <!-- If you have any question or need consultaion, then you have my contact
          information below to reach me -->
                </p>
                <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
                  <div class="flex mb-10 items-center">
                    <div
                      class="p-2"
                      style="
                        background: #073024;
                        width: 50px;
                        height: 46px;
                        display: flex;
                        justify-content: center;
                        border-radius: 50%;
                        overflow: hidden;
                        border: 1px solid#111a3e;
                        backdrop-filter: blur(9px);
                        -webkit-backdrop-filter: blur(9px);
                      "
                    >
                      <img
                        src="https://img.icons8.com/metro/50/ffffff/new-post.png"
                        alt="new-post"
                        class="w-6"
                      />
                    </div>
                    <div class="ml-5 text-white">
                      <h4>Email</h4>
                      <p>Rexico@rexico.se</p>
                    </div>
                  </div>
                  <div class="flex mb-10 items-center">
                    <div
                      class="p-2"
                      style="
                        background: #073024;
                        width: 50px;
                        height: 46px;
                        display: flex;
                        justify-content: center;
                        border-radius: 50%;
                        overflow: hidden;
                        border: 1px solid#111a3e;
                        backdrop-filter: blur(9px);
                        -webkit-backdrop-filter: blur(9px);
                      "
                    >
                      <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                        alt="Phone"
                        class="w-6"
                      />
                    </div>
                    <div class="ml-5 text-white">
                      <h4>phone</h4>
                      <p>+467000000</p>
                    </div>
                  </div>
                  <div class="flex mb-10 items-center">
                    <div
                      class="p-2"
                      style="
                        background: #073024;
                        width: 50px;
                        height: 46px;
                        display: flex;
                        justify-content: center;
                        border-radius: 50%;
                        overflow: hidden;
                        border: 1px solid#111a3e;
                        backdrop-filter: blur(9px);
                        -webkit-backdrop-filter: blur(9px);
                      "
                    >
                      <img
                        src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                        alt="Linkedin"
                        class="w-6"
                      />
                    </div>
                    <div class="ml-5 text-white">
                      <h4>Linkedin</h4>
                      <p>www.LinkedIn.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="
                  /* background:; */
                  width: 100%;
                  height: 100%;
                  border-radius: 20px;
                  overflow: hidden;
                  border: 1px solid#111a3e;
                  backdrop-filter: blur(9px);
                  -webkit-backdrop-filter: blur(9px);
                "
              >
                <form class="flex flex-col p-2" data-aos="zoom-in-up">
                  <div class="mb-6">
                    <label for="email" class="text-white block mb-2 text-sm font-medium"
                      >Email</label
                    >
                    <input
                      type="Email"
                      id="email"
                      class="bg-[#073024] placeholder:bg-[#073024] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="email@gmail.com"
                      name="email"
                    />
                  </div>
                  <div class="mb-6">
                    <label for="subject" class="text-white block mb-2 text-sm font-medium"
                      >Subject</label
                    >
                    <input
                      type="subject"
                      id="subject"
                      class="bg-[#073024] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="subject"
                      name="subject"
                    />
                  </div>
                  <div class="mb-6">
                    <label for="message" class="text-white block mb-2 text-sm font-medium"
                      >Message</label
                    >
                    <textarea
                      id="Message"
                      class="bg-[#073024] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Lets'talk about ... "
                      name="Message"
                    ></textarea>
                  </div>
                  <button
                    class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div
                class="bg-gradient-to-tr opacity-25 bg-[#073024] to bg-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 tansform -translte-x-2/3 -translate-1/2"
              ></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.info-navigation {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-navigation button {
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: none;
  background-color: var(--orange, #f57c00);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.info-navigation button:hover {
  background-color: var(--dark-orange, #e65100);
}
</style>
