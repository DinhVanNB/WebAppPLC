<template>
  <h1 class="uppercase font-semibold text-2xl">Settings Connect!!</h1>
  <a-form
      layout='vertical'
      :model="formState"
      name="basic"
      autocomplete="off"
      @finish="onSettings"
      @finishFailed="onValidateError">
      <a-form-item label="Url SQL server" name="baseUrl" :rules="baseUrlRules">
          <a-input v-model:value="formState.baseUrl" >
              <template #prefix>
                  <ConsoleSqlOutlined/>
              </template>
          </a-input>
      </a-form-item>

      <a-form-item label="Api PLC server" name="plcApi" :rules="plcApiRules">
          <a-input v-model:value="formState.plcApi" >
              <template #prefix>
                  <ApiOutlined/>
              </template>
          </a-input>
      </a-form-item>

      <a-form-item >
          <a-button
              :loading="loading"
              block
              type="primary"
              ghost
              html-type="submit">
              Save
          </a-button>
      </a-form-item>
  </a-form>
</template>


<script >
  import {mapGetters} from 'vuex'
  import { ApiOutlined, ConsoleSqlOutlined} from '@ant-design/icons-vue'
  export default {
      name : 'HomeContent',
      components : {
          ApiOutlined,
          ConsoleSqlOutlined,
      },

      data : () => ({
          loading: false,
          formState: {
            baseUrl:'',
            plcApi:''
          },
          baseUrlRules: [
              {
                  required: true,
                  message: 'Base url mySQL server is required!'
              }, 
          ],
          plcApiRules: [
              {
                  required: true,
                  message: 'Api plc server is required!'
              }
          ]
      }),
      methods : {
        onSettings(values) {
              this.loading = true
              this
                  .$store
                  .dispatch('appState/setApi', {
                      baseUrl: values.baseUrl,
                      plcApi: values.plcApi
                  })
          },
          onValidateError(errorInfo) {
              console.log('Failed:', errorInfo);
          },
          
      },
      computed : {
          ...mapGetters('appState', {
              baseUrl: 'baseUrl',
              plcApi: 'plcApi'
          })
      },
      watch : {
          loading() {
              if (this.loading === false) 
                  return
              setTimeout(() => {
                  this.loading = false
              }, 2000);
          }
      },
      beforeMount(){
        this.formState.baseUrl =  this.$store.state.appState.baseUrl
        this.formState.plcApi =  this.$store.state.appState.plcApi
      }
  }
</script>




