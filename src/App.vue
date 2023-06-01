<template>
  <div>
    <ejs-gantt ref="gantt" :dataSource="data"
              :taskFields="taskFields"
              :treeColumnIndex="1"
              :toolbar="toolbarOptions"
              :allowPdfExport="true"
              :allowExcelExport="true"
              :toolbarClick="toolbarBtnClk"
              :height="450">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" width="120" textAlign="Right"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="200"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" format="dd/MM/yyyy" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
</template>

<script>
import {GanttComponent, ColumnsDirective, ColumnDirective, Toolbar, PdfExport, ExcelExport} from '@syncfusion/ej2-vue-gantt'
import {projectNewData} from './data.js'
export default{
  name: 'App',
  components: {
    'ejs-gantt': GanttComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  provide:{
    gantt: [Toolbar, PdfExport, ExcelExport]
  },
  methods:{
    toolbarBtnClk(args){
      let ganttObj = this.$refs.gantt.ej2Instances;
      if(args.item.text == 'Pdf export'){
        ganttObj.pdfExport(
          {
            fileName: 'projectData.pdf',
            enableFooter: false,
            showPredecessorLines: false,
            theme: 'Fabric'
          }
        )
      } else if(args.item.text == 'Excel export'){
        ganttObj.excelExport({
          fileName: 'projectData.xlsx',
          theme:{
            header:{ fontColor:"#00008B"},
            record:{ fontColor:"#C67878"}
          },
          header:{
            headerRows: 1,
            rows:[{
              cells:[{
                colSpan: 4,
                value: 'Project Time Tracking Report',
                style: {fontSize:20, hAlign:'Center'}
              }]
            }]
          },
          footer:{
            footerRows: 1,
            rows:[{
              cells:[{
                colSpan: 4,
                value: 'Visit Again!!!',
                style: {fontSize:18, hAlign:'Center'}
              }]
            }]
          }
        })
      } else if(args.item.text == 'CSV export'){
        ganttObj.csvExport()
      } 
    }
  },
  data(){
    return{
      data: projectNewData,
      toolbarOptions: ['PdfExport', 'ExcelExport', 'CsvExport'],
      taskFields:{
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
      },
    }
  }
}

</script>

<style>
  @import url("https://cdn.syncfusion.com/ej2/material.css");
</style>

