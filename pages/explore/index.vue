<template>
  <div class="overflow-x-hidden pt-20">
    <div class="relative">
      <div class="circle circle-double w-24 h-24 sm:w-56 sm:h-56 rounded-full absolute" />
    </div>

    <div class="container mx-auto relative">
      <div class="title-drawing text-8xl sm:text-11xl absolute hidden sm:block">
        Explore
      </div>
      <section class="py-8 sm:py-64 flex justify-between">
        <div class="artist-display relative">
          <div class="flex mx-4">
            <div class="image-icon hidden sm:block h-24 w-24 rounded-full shadow-xl relative flex justify-center items-center sm:m-0 sm:mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-heart w-24 h-24 fill-current text-white">
                <circle cx="12" cy="12" r="10" class="text-tracked-main" />
                <path class="text-white" d="M12.88 8.88a3 3 0 114.24 4.24l-4.41 4.42a1 1 0 01-1.42 0l-4.41-4.42a3 3 0 114.24-4.24l.88.88.88-.88z" />
              </svg>
            </div>
            <div class="details mb-4 sm:mb-0">
              <h1 class="text-4xl sm:text-5xl font-semibold mb-4 tracking-wider">
                Explore Tracklists
              </h1>
              <h3 class="max-w-lg text-lg leading-relaxed font-light">
                Lists tracklists with the top number of votes amongst all uploaded tracklists on the platform
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-4 mb-4">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
            <div class="bg-gray-600 py-8">1</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.circle {
  background: linear-gradient(0deg, #9c0296, #eb0580);
}

.circle-double {
  transform: scale(2.3);
  left: 55%;
  top: 20px;
  background: linear-gradient(180deg, rgba(156, 2, 150, 0.8), rgba(235, 5, 128, 0.8));
}

.circle-double:after {
  content: '';
  background-color: rgba(156, 2, 150, 0.4);
  left: 45%;
  top: 30px;
  @apply w-full h-full absolute rounded-full;
}

.title-drawing {
  font-family: 'Londrina Outline', cursive;
  top: 0;
  left: -20px;
  color: rgba(255, 255, 255, 0.2);
}

.image-icon {
  background: linear-gradient(140deg, rgba(235, 5, 128, 0.7), rgba(156, 2, 150, 0.7));
}
</style>
