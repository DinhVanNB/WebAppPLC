<template>
    <div>
      <h1 class="text-2xl text-center">{{txtText}}</h1> 
      <a-divider>
          <a-typography-text class="text-xs " type="secondary">
              Alarm
          </a-typography-text>
          
      </a-divider>
      <div class=" gap-3 flex justify-center">
        <div v-if="lampRun" class='w-[100px] h-[100px] rounded-full bg-green-600 blink' ></div>
        <div v-else class="w-[100px] h-[100px] rounded-full bg-red-600" ></div>
      </div>
      
      <a-divider>
          <a-typography-text class="text-xs " type="secondary">
              Controls
          </a-typography-text>
      </a-divider>
      <div class="px-5 max-w-screen-sm mx-auto mt-3 grid grid-cols-2 gap-2 " >
          <a-button  type='ghost' :loading="loading" @click="onStart" block  size="large" >
              Start
          </a-button>
          
          <a-button danger  :loading="loading" @click="onStop" block ghost size="large" >
              Stop
          </a-button>
      </div>
      <div class="px-5 max-w-screen-sm mx-auto mt-3 grid grid-cols-2 gap-2 " >
          <a-button type="primary" :loading="loading" @click="onAuto" block ghost size="large" >
              Auto
          </a-button>
          
          <a-button type="primary" :loading="loading" @click="onManual" block ghost size="large" >
              Manual
          </a-button>
      </div>
      <div class="px-5 max-w-screen-sm mx-auto mt-3 grid grid-cols-2 gap-2 " >
          <a-button type="primary" :loading="loading" @click="onStartSim" block ghost size="large" >
              Run Simulation
          </a-button>
          
          <a-button type="primary" :loading="loading" @click="onStopSim" block ghost size="large" >
            Stop Simulation
          </a-button>
      </div>
      <div class="mx-auto max-w-[560px] max-h-[80px] mt-3 " >
        <img class="inline-block "  v-if="conveyor" src="../assets/conveyor-run.svg"/>
        <img class="inline-block" v-else src="../assets/conveyor.svg"/>
      </div>
  
      <div class="px-5 max-w-screen-sm mx-auto mt-5 grid grid-cols-3 gap-2 ">
          <div class="text-center">
            <h2 class="font-semibold text-xl text-blue-600">Sản phẩm 1</h2>
            <p class="text-base">{{products[0]}}</p>
          </div>
          <div class="text-center">
            <h2 class="font-semibold text-xl text-blue-600">Sản phẩm 2</h2>
            <p class="text-base">{{products[1]}}</p>
          </div>
          <div class="text-center">
            <h2 class="font-semibold text-xl text-blue-600">Sản phẩm 3</h2>
            <p class="text-base">{{products[2]}}</p>
          </div>
      </div>
    </div>
      
  </template>
  
  
  
  <script>
    import {
            plcRunStatus,
            plcStart,
            plcStop,
            plcRunAuto,
            plcRunManual,
            plcStartSim,
            plcStopSim
        } from '@/api/plc'
    import { mapGetters } from 'vuex';
    var timer 
    export default {
      name: 'HMI',
      
      data(){
        return({
          txtText: 'App Điều Khiển PLC',
          lampRun: false,
          conveyor:false,
          products:[0,0,0],
          loading:false
        })
      },
      methods:{
          async getLampRunStatus(){
            try{
             const data = await plcRunStatus()
             if(data?.coils){
              this.lampRun = data?.coils[0]
              this.conveyor=data?.coils[3]
              this.products= data?.count
             }
            }
            catch(e){
              console.log('Error get lamp run', e)
            }
          },
          async onStart(){
            try{
              clearTimeout(setTimeout(()=>this.loading=false,1000))
              this.loading=true
              await plcStart()
              setTimeout(()=>this.loading=false,1000)
            }
            catch(e){
              console.log('Error press Start', e)
            }
          },
          async onStop(){
            try{
              clearTimeout(setTimeout(()=>this.loading=false,1000))
              this.loading=true
              await plcStop()
              setTimeout(()=>this.loading=false,1000)
            }
            catch(e){
              console.log('Error press Stop', e)
            }
          },
          async onAuto(){
            try{
              clearTimeout(setTimeout(()=>this.loading=false,1000))
              this.loading=true
              await plcRunAuto()
              setTimeout(()=>this.loading=false,1000)
            }
            catch(e){
              console.log('Error press Auto', e)
            }
          },
          async onManual(){
            try{
              clearTimeout(setTimeout(()=>this.loading=false,1000))
              this.loading=true
              await plcRunManual()
              setTimeout(()=>this.loading=false,1000)
            }
            catch(e){
              console.log('Error press Auto', e)
            }
          },
          async onStartSim(){
            try{
              clearTimeout(setTimeout(()=>this.loading=false,1000))
              this.loading=true
              await plcStartSim()
              setTimeout(()=>this.loading=false,1000)
            }
            catch(e){
              console.log('Error press BtnSim', e)
            }
          },
          async onStopSim(){
            try{
              clearTimeout(setTimeout(()=>this.loading=false,1000))
              this.loading=true
              await plcStopSim()
              setTimeout(()=>this.loading=false,1000)
            }
            catch(e){
              console.log('Error press BtnStopSim', e)
            }
          },
  
      },
      mounted(){
        if(!this.$store.state.user.isLogin){
            this.$router.push('/auth/login')
        }
        else{
            timer = setInterval(() => {
                this.getLampRunStatus()
            }, 1000)
        }
      },
      beforeUnmount(){
        clearInterval(timer)
      },
      computed:{
            ...mapGetters('user', {
                isLogin: 'isLogin'
            })
        },
        watch:{
            isLogin(){
                if(!this.isLogin){
                this.$router.push('/auth/login')
                }
            }
        }
        
    }
    
  </script>
  <style scoped>
    .blink{
      animation: blinks1 1s ease infinite ;
    }
  
    @keyframes blinks1{
      0%{
        transform: scale(1);
      }
      50%{
        transform: scale(1.1);
      }
      100%{
        transform: scale(1);
      }
    }
  
  </style>