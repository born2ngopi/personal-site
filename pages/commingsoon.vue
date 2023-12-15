<template>
    <div class="coming-soon bg-slate-100 dark:bg-slate-800">
        <div class="coming-soon__content text-sky-950 dark:text-white">
            <h1 class="coming-soon__title">Coming Soon</h1>
            <p class="coming-soon__text">We are working hard to launch this page.</p>
            <UButton @click="$router.go(-1)" class="mt-10">Back</UButton>
        </div>
    </div>
</template>


<style scoped>
.coming-soon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.coming-soon__content {
    text-align: center;
}

.coming-soon__title {
    font-size: 3rem;
    font-weight: 700;
    /* color: #333333; */
}

.coming-soon__text {
    font-size: 1.5rem;
    font-weight: 400;
    /* color: #333333; */
}

</style>