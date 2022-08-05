<template>
  <div id="container">
    <MenuMain/>
    <div id="content">
      <h1 id="title-page">Colaboradores</h1>
      <div id="content-page">
        <div id="list-collaborators">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Função</th>
                <th>Supervisão</th>
                <th>Canal</th>
                <th>Meta atual</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="collaborator in collaborators" :key="collaborator.id">
                <td>{{ collaborator.id }}</td>
                <td>{{ collaborator.nome }}</td>
                <td>{{ collaborator.funcao }}</td>
                <td>{{ collaborator.supervisor }}</td>
                <td>{{ collaborator.canal }}</td>
                <td>{{ collaborator.meta }}</td>
                <td>
                  <div>
                    <i class="fi fi-rr-edit" @click="editCollaborator(collaborator.id, collaborator.supervisor, collaborator.canal, collaborator.meta )"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div id="filters">
          </div>
        </div>

      </div>
    </div>
  </div>
  <div id="modal" v-if="page === 2">
    <EditCollaborator
      :collaborator="this.collaborator"
      @close-page="pageTrade(1)"
      @refresh-data="getCollaborators"
      @msg="infoMsg"
    />
  </div>
  <InfoMsg :msg="info.msg" type="sucess" v-if="info.status"/>
</template>

<script>

import MenuMain from "@/components/app/MenuMain";
import Cookie from "js-cookie";
import {AXIOS} from "../../../../services/api.ts";
import EditCollaborator from "@/components/app/management/collaborators/EditCollaborator";
import InfoMsg from "@/components/app/_aux/InfoMsg";

export default {
  name: "CollaboratorPage",
  components: {
    MenuMain,
    EditCollaborator,
    InfoMsg
  },
  data () {
    return {
      collaborators: {},
      collaborator: {
        id: null,
        supervisor: null,
        channel: null,
        meta: null
      },
      page: 1,
      info: {
        msg: null,
        status: false
      }
    }
  },
  methods: {
    getCollaborators: function () {
      AXIOS({
        method: 'GET',
        url: 'collaborator',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('rv_token')
        }
      }).then((res) => {
        this.collaborators = res.data
      }).catch((error) => {
        console.log(error)
      })
    },
    editCollaborator: function (id, supervisor, channel, meta) {
      this.pageTrade(2)
      this.collaborator.id = id
      this.collaborator.supervisor = supervisor
      this.collaborator.channel = channel
      this.collaborator.meta = meta
    },
    pageTrade: function (page) {
      this.page = page
    },
    infoMsg: function (data) {
      this.info.msg = data.data.msg
      this.info.type = data.data.type
      this.info.status = true

      setTimeout(() => {
        this.info.status = false
      }, 3000)
    }
  },
  mounted() {
    this.getCollaborators()
  }
}
</script>

<style scoped lang="scss">

  #list-collaborators {
    @include container(100%, 95%, 2vh 2vw, #fff);
    @include flex(row, initial, initial, 20px);
    border-radius: 10px;

    table {
      @include table;
      width: 75%;
      height: 100%;


      th:nth-child(1), td:nth-child(1) {
        width: 5%;
        text-align: center;
      }

      th:nth-child(2), td:nth-child(2) {
        width: 40%;
        text-align: left;
      }

      th:nth-child(3), td:nth-child(3), th:nth-child(4), td:nth-child(4), th:nth-child(5), td:nth-child(5), th:nth-child(6), td:nth-child(6) {
        width: 12%;
        text-align: center;
      }

      th:nth-child(7), td:nth-child(7) {
        text-align: center;
        width: 15%;
      }

      td:nth-child(7) div {
        @include flex(row, center, center, 10px);

        i {
          font-size: 1.6rem;
          color: $i-menu;
          @include transtion;
          cursor: pointer;

          &:hover {
            color: $age-orange;
          }
        }
      }


    }

    #filters {
      @include container(23%, 100%, 1vh 1vw, $background);
      border-radius: 10px;
    }
  }



</style>