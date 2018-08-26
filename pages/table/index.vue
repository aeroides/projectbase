<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-input placeholder="科室名称" prefix-icon="el-icon-search" v-model="keyword"></el-input>
      </el-col>
      <el-col :span="8">
        <el-date-picker v-model="startMonth" type="month" placeholder="选择月份区间"></el-date-picker>
      </el-col>
      <el-col :span="8" style="text-align: right;">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" style="text-align: left;">
        <el-button type="success" @click="exportExcel">导出数据</el-button>
      </el-col>
    </el-row>
    <div id="exceldata">
      <el-table :data="list" stripe show-summary style="width: 100%">
        <el-table-column :index="indexMethod" label="编号" type="index"></el-table-column>
        <el-table-column prop="DEPT" label="科室"></el-table-column>
        <el-table-column prop="MZINCOME" label="科室总收入">
          <el-table-column
            prop="MZINCOME"
            label="2018年6月累计">
            <template slot-scope="scope">
              <span>{{scope.row.MZINCOME + scope.row.ZYINCOME + scope.row.YPINCOME + scope.row.HCINCOME}}</span>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="MZINCOME" label="其中：门诊总收入">
          <el-table-column
            prop="MZINCOME"
            label="2018年6月累计">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="ZYINCOME" label="其中：住院总收入">
          <el-table-column
            prop="ZYINCOME"
            label="2018年6月累计">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="YPINCOME" label="其中：药品总收入">
          <el-table-column
            prop="YPINCOME"
            label="2018年6月累计">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="HCINCOME" label="其中：耗材总收入">
          <el-table-column
            prop="HCINCOME"
            label="2018年6月累计">
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
      list: [],
      keyword: '',
      startMonth: ''
    }
  },
  methods: {
    getData () {
      service.get('http://localhost:3000/deptincome.json').then(response => {
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
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
</style>
