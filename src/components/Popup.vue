<script setup>
import { reactive, ref, computed, toRefs, onBeforeMount, onMounted, onUnmounted, watch } from 'vue'

</script>
<template>
    <!-- 加热炉8个数据 -->
    <div class="popup">
        <div style=" width: 100%; text-align: center; margin-top: 15px; ">加热炉信息</div>
        <div style="height: 80%; margin: 10px 20px 10px 20px; ">
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                <span>预热段温度</span><span>data℃</span>
            </p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                加热1段温度<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                加热2段温度<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                均热段温度<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                空燃比<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                炉内钢柸数量<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                吨钢能耗<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                平均出炉时间<span>data℃</span></p>
        </div>
    </div>
    <!-- 粗轧数据 -->
    <!-- <div class="popup">
        <div style=" width: 100%; text-align: center; margin-top: 15px; ">加热炉信息</div>
        <div style="height: 80%; margin: 10px 20px 10px 20px; ">
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                <span>预热段温度</span><span>data℃</span>
            </p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                加热1段温度<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                加热2段温度<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                均热段温度<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                空燃比<span>data℃</span></p>
            <p
                style="height: 37px; line-height: 37px;  background: url('/assets/3d/img/InformationItem.png') center /100% 100%; width: 100%; margin-top: -7px;display: flex; justify-content: space-between; align-items: center; padding: 0 15px;">
                炉内钢柸数量<span>data℃</span></p>
        </div>
    </div> -->
</template>

<style scoped lang ='scss'>
.popup {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 356px;
    // height: 304px;
    // background-image: url("/assets/3d/img/3DInformation8.png"); //八个数据
    // height: 244px;
    // background-image: url("/assets/3d/img/3DInformation6.png"); //六个数据
    background-size: 100% 100%;
    transform: translateX(-50%);
    z-index: 2;
    color: #ffffff;
}
</style>