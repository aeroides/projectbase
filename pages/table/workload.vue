<template>
  <div>
    <el-row type="flex" :gutter="20">
      <el-date-picker v-model="month" type="month" placeholder="选择月份区间" style="margin-right:10px;"></el-date-picker>
      <el-button type="primary" icon="el-icon-search" @click="getData">搜索</el-button>
      <el-button type="success" @click="exportExcel">导出数据</el-button>
    </el-row>
    <div id="exceldata">
      <el-table :data="list" stripe show-summary style="width: 100%">
        <el-table-column :index="indexMethod" label="编号" type="index"></el-table-column>
        <el-table-column prop="DEPT" label="科室"></el-table-column>
        <el-table-column prop="MZINCOME" label="期末实际开放床位">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="科室收入">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="药品收入">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="门诊收入">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="药比">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="门诊诊量">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="门诊均次">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="出院人数">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="住院均次">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="手术例数">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="三、四级手术例数">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="操作例数">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
          <el-table-column prop="MZINCOME" label="增幅"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="床位使用率">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="平均住院日">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="耗材比">
          <el-table-column prop="MZINCOME" label="2018"></el-table-column>
          <el-table-column prop="MZINCOME" label="2017"></el-table-column>
          <el-table-column prop="MZINCOME" label="增额"></el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
// import { service } from '~/plugins/axios'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
  data () {
    return {
      list: [],
      month: ''
    }
  },
  methods: {
    asyncData ({ params }) {
      console.log(params)
    },
    getData () {
    //   service.get('deptincome', { month: this.month }).then(response => {
    //     this.list = response.data
    //   })
    },
    indexMethod (index) {
      return ++index
    },
    exportExcel () {
      /* generate workbook object from table */
      var wb = XLSX.utils.table_to_book(document.querySelector('#exceldata'))
      /* get binary string as output */
      var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
      console.log(wbout)
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '科室月报.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') {
          console.log(e, wbout)
        }
      }
      return wbout
    },
    getCmonth: function () {
      let date = new Date()
      let year = date.getFullYear()
      if (date.getMonth() < 9) {
        this.month = year + '-0' + (date.getMonth() + 1)
      } else {
        this.month = year + '-' + (date.getMonth() + 1)
      }
    }
  },
  mounted () {
    this.getCmonth()
    // this.getData()
  },
  computed: {
    labName: function () {
      let date = new Date(this.month)
      let name = date.getFullYear() + '年' + (date.getMonth() + 1) + '月累计'
      return name
    }
  }
}
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-table__footer-wrapper{
  font-weight: 600;
}
</style>
