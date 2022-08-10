<template>
  <div id="container">
    <MenuMain/>
    <div id="content">
      <h1 id="title-page">Extrato financeiro - Supervisores</h1>
      <div id="content-page">
        <div id="list-collaborators">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Meta</th>
                <th>Percentual atingido</th>
                <th>Vendas</th>
                <th>Cancelados</th>
                <th>Estrelas</th>
                <th>Preço da estrela</th>
                <th>Comissão</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Multi canal de vendas</td>
                <td>300</td>
                <td>90.33%</td>
                <td>271</td>
                <td>0</td>
                <td>5964</td>
                <td>R$0.25</td>
                <td>R$1491.00</td>
                <td><i class="fi fi-rr-users-alt"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import MenuMain from "@/components/app/MenuMain";

export default {
  name: "ReportFinancial",
  components: {
    MenuMain
  }
}
</script>

<style scoped lang="scss">

#container {
  #content {
    #content-page {
      #list-collaborators {
        @include container(100%, 95%, 2vh 1vw, #fff);
        @include flex(row, initial, initial, 20px);
        border-radius: 10px;

        table {
          @include table;
        }
      }
    }
  }
}

</style>