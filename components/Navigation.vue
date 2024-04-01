<template>
    <div id="navigation">
        <nav class="flex justify-between" :class="{'shadow-md bg-neutral-50 dark:bg-slate-700': isScrolled}" >
            <div id="title-header">
                <a @click="navigateTo('/')">
                    <span class="flex"> <span>hi@chan</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.25 4.5l7.5 7.5l-7.5 7.5"/></svg> <span id="underscore">_</span> </span>
                </a>
            </div>
            <div id="menu">
                <a :class="{active: currentRoute === '/'}"  @click="navigateTo('/')">Me</a>
                <a :class="{active: currentRoute === '/blogs'}"  @click="navigateTo('/blogs')">Blog</a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isScrolled: false
        }
    },
    computed: {
        currentRoute() {
            return this.$route.path;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
        handleScroll() {
            if (window.scrollY > 50) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
        },
    },
}
</script>


<style scoped>
/* remove text decoration */
nav {
    padding-right: 6%;
    padding-left: 6%;
    position: fixed;
    /* top: 0;
    left: 0; */
    z-index: 100;
    width: 100%;
    /* position: absolute; */
}

#title-header{
    margin-top: 10px;
    margin-bottom: 10px;
}
#menu {
    display: flex;
    justify-content: right;
    right: 0;
    /* margin-left: auto; */
    /*margin-right: 2%;*/
    /* margin-top: 10px; */
    margin-bottom: 10px;
}

#underscore{
    /* create blink animation */
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% {
        color: transparent;
    }
    50% {
        color: #e2e8f0;
    }
}
/* nav {
    background-color: v-bind(navBackgroundColor);
} */


a {
    margin-top: 10px;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5em;
}

a + a {
    margin-left: 1em;
}
a.active {
    border-bottom: 2px solid #e2e8f0;  
}


</style>