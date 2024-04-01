<template>
    <div>
       

        <div class="home">
            
            <div class="me ">
                
                <div class="container">
                    <h1 id="title" class="text-6xl font-semibold text-sky-950 dark:text-white">Hello... 👋, I'm Chandra Agung Rizky</h1>
                    <p id="sub-title" class="sub-text text-slate-400">A passionate software developer with over 5 years of experience.</p>

                    <div id="scroll-down">
                        <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                            <path id="wheel" d="M123.359,79.775l0,72.843" style="fill:none;stroke-width:20px;" class="stroke-slate-700 dark:stroke-slate-100"/>
                            <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style="fill:none;stroke-width:20px;" class="stroke-slate-700 dark:stroke-slate-100"/>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- about me -->
            <div class="aboutme bg-[#F5F5F5] pt-52 pb-52 dark:bg-slate-600">
                <div class="container">
                    <h1 class="text-6xl font-semibold text-sky-950 dark:text-white">About Me</h1>
                    <p class="sub-text mt-3 text-slate-400">I am a Backend Engineer with more than 5 years of experience in the software development field. I have worked on various projects that demand expertise in managing databases, designing backend architectures, and ensuring optimal system performance.</p>
                    <!-- <br> -->
                    <p class="sub-text text-slate-400">I believe that the success of a Backend Engineer is not only based on a strong technical understanding but also on the ability to adapt quickly to changes. Flexibility and a willingness to continue learning are the keys to staying relevant in the rapidly evolving world of technology.</p>
                </div>
            </div>

            <!-- skills -->
            <div class="skills pt-52 pb-52">
                <div class="container">
                    <h1 class="text-6xl font-semibold text-sky-950 dark:text-white">Skills & Expertise</h1>
                    <div class="mt-4 flex space-x-4">
                        <UBadge size="lg" :ui="{ rounded: 'rounded-lg' }" color="indigo" variant="solid">Vue</UBadge>
                        <UBadge size="lg" :ui="{ rounded: 'rounded-lg' }" color="indigo" variant="solid">Go</UBadge>
                        <UBadge size="lg" :ui="{ rounded: 'rounded-lg' }" color="indigo" variant="solid">Python</UBadge>
                        <UBadge size="lg" :ui="{ rounded: 'rounded-lg' }" color="indigo" variant="solid">Javascript</UBadge>
                        <UBadge size="lg" :ui="{ rounded: 'rounded-lg' }" color="indigo" variant="solid">Php</UBadge>
                        <UBadge size="lg" :ui="{ rounded: 'rounded-lg' }" color="indigo" variant="solid">Rust</UBadge>
                    </div>
                </div>
            </div>

            <!-- project -->
            <div class="bg-[#F5F5F5] project pt-52 pb-52 dark:bg-slate-600">
                <div class="container">
                    <h1 class="text-6xl font-semibold text-sky-950 dark:text-white">Projects</h1>
                    <p class="mt-2">This my personal reaserch for improving my knowledge and productivity</p>
                    <!-- containt -->
                    <div >

                        <h3 class="mt-4 mb-4 text-3xl">Website</h3>

                        <div class="grid grid-cols-2 gap-4">
                            <div v-for="project in websites">
                                <CardProject :title="project.title" :description="project.description" :Icon="project.icon" :Link="project.link" />
                            </div>
                        </div>

                        <h3 class="mt-4 mb-4 text-3xl">Backends / Server</h3>
                        <div class="grid grid-cols-2 gap-4">

                            <div v-for="project in backends">
                                <CardProject :title="project.title" :description="project.description" :Icon="project.icon" :Link="project.link" />
                            </div>

                        </div>


                        <h3 class="mt-4 mb-4 text-3xl">Tools</h3>
                        <div class="grid grid-cols-2 gap-4">
                            
                            

                            <div v-for="project in projects">
                                <CardProject :title="project.title" :description="project.description" :Icon="project.icon" :Link="project.link" />
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>

            <!-- contact -->
            <div class="pt-52 pb-52 ">
                <div class="container">
                    <h1 class="text-6xl font-semibold text-sky-950 dark:text-white">Contact Me</h1>
                    <p class="sub-text mt-3 text-slate-400">Let's discuss your project or idea. You can reach me at:</p>
                    <a href="mailto:needkopi@gmail.com" class="sub-text text-sky-950 dark:text-white font-semibold underline"> needkopi@gmail.com </a>
                </div>

            </div>

        </div>

        <Footer />
    </div>
        
</template>

<script>
export default {
    //name: 'HomeView',
    mounted() {
        let screenHeight = window.innerHeight;
        window.addEventListener('resize', () => {
        screenHeight = window.innerHeight;
        });

        // set height of class me to screen height
        document.getElementsByClassName('me')[0].style.height = screenHeight + 'px';
    },
    // create list data for project
    data() {
        return {
            websites: [
                {
                    title: 'Personal Site',
                    description: 'This my personal site',
                    icon: ['i-nonicons-vue-16','i-simple-icons-nuxtdotjs'],
                    link: 'https://github.com/born2ngopi/personal-site',
                }
            ],
            projects: [
                {
                    title: 'Orca',
                    description: 'Orca is tools for auto generate commit with ollama',
                    icon: ['i-fa6-brands-golang'],
                    link: 'https://github.com/born2ngopi/orca',
                },
                {
                    title: 'Dolpin',
                    description: 'Dolpin is tools for auto generate go unit test',
                    icon: ['i-fa6-brands-golang'],
                    link: 'https://github.com/born2ngopi/dolpin',
                }
            ],
            backends: [
                {
                    title: 'Ngamux',
                    link:'https://github.com/ngamux/ngamux',
                    description: 'Simple HTTP router for Go',
                    icon: ['i-fa6-brands-golang']
                },
                {
                    title: 'Server',
                    link:'https://github.com/indenosia/server',
                    description: 'Http framework for deno',
                    icon: ['i-teenyicons-deno-outline']
                },
                {
                    title:'Requtrap',
                    link: 'https://github.com/libidev/requtrap.go',
                    description: 'Fast and Configurable API Gateway Written Using Go',
                    icon: ['i-fa6-brands-golang']
                }
            ]
        }
    }
};
</script>

<style scoped>

#title {
    padding-top: 24%;
    margin-bottom: 0;
}

#sub-title {
    margin-top: 0;
}

.sub-text {
    font-size: 1.5em;
}

.me{
    height: 100%;
}

.aboutme {
    height: 100%;
    width: 100%;
    /* background-color: #F5F5F5; */
}


@keyframes scroll {
    0% {
        transform: translateY(0);
    }
    30% {
        transform: translateY(100px);
    }
}

svg #wheel {
    animation: scroll ease 1.5s infinite;
}

/* make id scroll-down to center */
#scroll-down {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* set to bottom */
    position: absolute;
    bottom: 50px;
    /* set to center */
    left: 50%;
}

/* check if screen width under 900 px hide scroll-down */
@media (max-width: 900px) {
    #scroll-down {
        display: none;
    }
}
</style>
  