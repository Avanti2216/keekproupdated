import React, { useContext } from 'react'
import { Mycontext } from '../utils/Context';

const ManageCampaign = () => {
    const contextState = useContext(Mycontext);
const expanded = contextState.expanded;
  return (
    <div class={` flex relative top-20 ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[350px] w-[calc(100%-360px)]"
      }  overflow-y-auto  bg-[#F5F5F5] space-y-4 p-4 `}>
      Manage
    </div>
  )
}

export default ManageCampaign