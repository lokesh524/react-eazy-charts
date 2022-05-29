import React, { useEffect, useState } from 'react'
import ReactEcharts from "echarts-for-react";

export default function Charts({
  options
}) {

  return (
    <ReactEcharts option={options} />
  )
}
