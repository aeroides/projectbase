<template>
  <div>
    <el-row type="flex" :gutter="20">
      <el-date-picker v-model="month" type="month" :picker-options="pickerMonthBefore" placeholder="选择月份区间" style="margin-right:10px;"></el-date-picker>
      <el-button type="primary" icon="el-icon-search" @click="getData">搜索</el-button>
      <el-button type="success" @click="exportExcel">导出数据</el-button>
    </el-row>
    <div id="exceldata">
      <el-table :data="list" stripe show-summary style="width: 100%">
        <el-table-column :index="indexMethod" label="编号" type="index"></el-table-column>
        <el-table-column prop="DEPT" label="科室"></el-table-column>
        <el-table-column prop="MZINCOME" label="科室总收入">
          <el-table-column
            prop="MZINCOME"
            :label="labName">
            <template slot-scope="scope">
              <span>{{scope.row.MZINCOME + scope.row.ZYINCOME + scope.row.YPINCOME + scope.row.HCINCOME}}</span>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="其中：门诊总收入">
          <el-table-column
            prop="MZINCOME"
            :label="labName">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="ZYINCOME" label="其中：住院总收入">
          <el-table-column
            prop="ZYINCOME"
            :label="labName">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="YPINCOME" label="其中：药品总收入">
          <el-table-column
            prop="YPINCOME"
            :label="labName">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="HCINCOME" label="其中：耗材总收入">
          <el-table-column
            prop="HCINCOME"
            :label="labName">
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { service } from '~/plugins/axios'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
  data () {
    return {
      pickerMonthBefore: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      list: [],
      month: ''
    }
  },
  methods: {
    asyncData ({ params }) {
      console.log(params)
    },
    getData () {
      let url = `deptincome/${this.month}`
      service.get(url).then(response => {
        this.list = response.data
      })
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
      if (date.getMonth() < 10) {
        this.month = year + '-0' + (date.getMonth())
      } else {
        this.month = year + '-' + (date.getMonth())
      }
    }
  },
  mounted () {
    this.getCmonth()
    this.getData()
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
