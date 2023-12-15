<template>
    <div id="navigation">
        <nav row :class="{'shadow-md bg-neutral-50 dark:bg-slate-700': isScrolled}" >
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
    display: flex;
    justify-content: right;
    padding-right: 6%;
    position: fixed;
    /* top: 0;
    left: 0; */
    right: 0;
    z-index: 100;
    width: 100%;
    /* position: absolute; */
}

#menu {
    /* margin-left: auto; */
    /*margin-right: 2%;*/
    margin-top: 10px;
    margin-bottom: 10px;
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