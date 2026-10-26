// Table of contents for the 52-week drone engineering series ("無人機連載").
// Copied from the v4 TOC (2026-10-25) in the internal planning doc — week
// number, publish date and bilingual title only. No article content exists
// yet; this is a planning TOC, not a post index.
module.exports = {
  seriesTitle: '無人機開發 52 週連載',
  seriesTitleEn: '52 Weeks of Drone Engineering',
  seriesIntro:
    '一份 52 週的工程筆記企畫：從整機系統、動力與飛控，到量產驗證與台灣產業。目前僅定稿目錄，文章尚未發布。',
  sections: [
    {
      id: 'a',
      title: '篇 A　系統觀',
      weeks: [
        { n: 1, week: '2026-W44', date: '2026-10-31', zh: '為什麼要懂整台無人機：從需求到規格', en: 'Why Whole-System Thinking: From Mission to Spec' },
        { n: 2, week: '2026-W45', date: '2026-11-07', zh: '無人機架構全圖：機體、動力、飛控、感測、通訊', en: 'Drone Architecture Map' },
        { n: 3, week: '2026-W46', date: '2026-11-14', zh: '重量與推重比預算表怎麼做', en: 'Building a Weight and Thrust-to-Weight Budget' },
        { n: 4, week: '2026-W47', date: '2026-11-21', zh: '開源生態：PX4、ArduPilot、Betaflight 怎麼選', en: 'Choosing PX4, ArduPilot or Betaflight' },
      ],
    },
    {
      id: 'b',
      title: '篇 B　機體與動力',
      weeks: [
        { n: 5, week: '2026-W48', date: '2026-11-28', zh: '機架設計：材料、剛性與振動', en: 'Frame Design: Materials, Stiffness, Vibration' },
        { n: 6, week: '2026-W49', date: '2026-12-05', zh: '螺旋槳選型：直徑、螺距與效率', en: 'Propeller Selection: Diameter, Pitch, Efficiency' },
        { n: 7, week: '2026-W50', date: '2026-12-12', zh: '無刷馬達入門：KV、極數與效率圖', en: 'BLDC Motors: KV, Poles, Efficiency Maps' },
        { n: 8, week: '2026-W51', date: '2026-12-19', zh: '推力台實測：怎麼量出可信的馬達數據', en: 'Thrust Stand Testing for Reliable Motor Data' },
        { n: 9, week: '2026-W52', date: '2026-12-26', zh: 'ESC 原理：從 PWM 到 DShot', en: 'ESC Basics: From PWM to DShot' },
        { n: 10, week: '2027-W53', date: '2027-01-02', zh: 'ESC 調校：FOC、Timing 與 RPM 濾波', en: 'ESC Tuning: FOC, Timing, RPM Filtering' },
        { n: 11, week: '2027-W01', date: '2027-01-09', zh: '能源路線：LiPo、鋰離子、固態與氫燃料', en: 'Energy Options: LiPo, Li-ion, Solid-State, Hydrogen' },
        { n: 12, week: '2027-W02', date: '2027-01-16', zh: '電池管理與續航估算', en: 'Battery Management and Endurance Estimation' },
        { n: 13, week: '2027-W03', date: '2027-01-23', zh: '電源設計：配電板、BEC 與雜訊', en: 'Power Distribution, BEC and Noise' },
        { n: 14, week: '2027-W04', date: '2027-01-30', zh: '動力系統整合：讓馬達、槳、電池互相匹配', en: 'Matching Motor, Prop and Battery' },
      ],
    },
    {
      id: 'c',
      title: '篇 C　飛控與感測',
      weeks: [
        { n: 15, week: '2027-W05', date: '2027-02-06', zh: '飛控硬體：MCU、RTOS 與佈線', en: 'Flight Controller Hardware and RTOS' },
        { n: 16, week: '2027-W06', date: '2027-02-13', zh: 'IMU 原理：陀螺儀與加速度計', en: 'IMU Fundamentals: Gyro and Accelerometer' },
        { n: 17, week: '2027-W07', date: '2027-02-20', zh: 'IMU 校正與溫度補償', en: 'IMU Calibration and Temperature Compensation' },
        { n: 18, week: '2027-W08', date: '2027-02-27', zh: '振動是 IMU 的敵人：隔振與濾波', en: 'Vibration vs IMU: Isolation and Filtering' },
        { n: 19, week: '2027-W09', date: '2027-03-06', zh: '磁力計：硬鐵、軟鐵與干擾', en: 'Magnetometer: Hard/Soft Iron and Interference' },
        { n: 20, week: '2027-W10', date: '2027-03-13', zh: '姿態估測：互補濾波到 EKF', en: 'Attitude Estimation: Complementary Filter to EKF' },
        { n: 21, week: '2027-W11', date: '2027-03-20', zh: 'GNSS、RTK 與干擾欺騙', en: 'GNSS, RTK, Jamming and Spoofing' },
        { n: 22, week: '2027-W12', date: '2027-03-27', zh: '氣壓計、光流與測距：定高定點', en: 'Barometer, Optical Flow and Rangefinder' },
        { n: 23, week: '2027-W13', date: '2027-04-03', zh: 'PID 控制：從直覺到調參', en: 'PID Control: Intuition to Tuning' },
        { n: 24, week: '2027-W14', date: '2027-04-10', zh: '用飛行日誌調參：Blackbox 與 ULog', en: 'Tuning with Flight Logs: Blackbox and ULog' },
        { n: 25, week: '2027-W15', date: '2027-04-17', zh: '冗餘與容錯：從失效保護到三餘度', en: 'Redundancy: From Failsafe to TMR and FDIR' },
        { n: 26, week: '2027-W16', date: '2027-04-24', zh: '通訊鏈路與抗干擾：跳頻、圖傳、衛星', en: 'Links and Anti-Jam: FHSS, Video, Satcom' },
      ],
    },
    {
      id: 'd',
      title: '篇 D　視覺、自主與邊緣運算',
      weeks: [
        { n: 27, week: '2027-W17', date: '2027-05-01', zh: '光電酬載：相機、熱像儀與雲台', en: 'EO/IR Payloads: Cameras, Thermal, Gimbals' },
        { n: 28, week: '2027-W18', date: '2027-05-08', zh: 'GNSS 拒止導航：VIO、LiDAR SLAM 與地形匹配', en: 'GNSS-Denied Navigation: VIO, LiDAR SLAM, Terrain Matching' },
        { n: 29, week: '2027-W19', date: '2027-05-15', zh: '深度感測：雙目、ToF、LiDAR', en: 'Depth Sensing: Stereo, ToF, LiDAR' },
        { n: 30, week: '2027-W20', date: '2027-05-22', zh: '邊緣運算平台：Jetson 等的選擇', en: 'Edge Computing Platforms' },
        { n: 31, week: '2027-W21', date: '2027-05-29', zh: '機上 AI 推論：模型壓縮與加速', en: 'On-board AI Inference: Compression and Acceleration' },
        { n: 32, week: '2027-W22', date: '2027-06-05', zh: '伴隨電腦與飛控整合：ROS 2', en: 'Companion Computer Integration with ROS 2' },
        { n: 33, week: '2027-W23', date: '2027-06-12', zh: '自主任務與多機協同：規劃、避障、蜂群', en: 'Autonomy and Multi-Drone: Planning, Avoidance, Swarms' },
        { n: 34, week: '2027-W24', date: '2027-06-19', zh: '模擬先行：SITL 與 Gazebo', en: 'Simulate First: SITL and Gazebo' },
      ],
    },
    {
      id: 'e',
      title: '篇 E　量產、驗證與合規',
      weeks: [
        { n: 35, week: '2027-W25', date: '2027-06-26', zh: '從原型到量產：DFM、DFA 與 MES 追溯', en: 'Prototype to Production: DFM, DFA, MES Traceability' },
        { n: 36, week: '2027-W26', date: '2027-07-03', zh: '產線末端檢測 EOL：推力、振動與電性', en: 'End-of-Line Testing: Thrust, Vibration, Electrical' },
        { n: 37, week: '2027-W27', date: '2027-07-10', zh: 'EMC 與射頻快篩：屏蔽箱、GNSS 自擾', en: 'EMC and RF Screening: Shield Boxes, GNSS Self-Jamming' },
        { n: 38, week: '2027-W28', date: '2027-07-17', zh: '航太與軍規標準入門：DO-178C、DO-160G、MIL-STD', en: 'Aerospace Standards 101: DO-178C, DO-160G, MIL-STD' },
        { n: 39, week: '2027-W29', date: '2027-07-24', zh: '資安：鏈路加密與韌體安全', en: 'Drone Cybersecurity: Links and Firmware' },
        { n: 40, week: '2027-W30', date: '2027-07-31', zh: 'NDAA 與 Blue UAS：美國的可信供應鏈規則', en: 'NDAA and Blue UAS: US Trusted Supply Chain Rules' },
        { n: 41, week: '2027-W31', date: '2027-08-07', zh: '台灣法規：遙控無人機管理規則', en: 'Taiwan Drone Regulations' },
        { n: 42, week: '2027-W32', date: '2027-08-14', zh: '國際認證與出口要求', en: 'International Certification and Export' },
      ],
    },
    {
      id: 'f',
      title: '篇 F　台灣產業與國防',
      weeks: [
        { n: 43, week: '2027-W33', date: '2027-08-21', zh: '台灣無人機產業地圖：聚落、廠商與實驗室', en: 'Taiwan Drone Industry Map: Hubs, Makers, Labs' },
        { n: 44, week: '2027-W34', date: '2027-08-28', zh: '非紅零組件瓶頸：磁鐵、MOSFET、熱像儀、碳纖維', en: 'Non-Red Bottlenecks: Magnets, MOSFETs, Thermal, Carbon Fiber' },
        { n: 45, week: '2027-W35', date: '2027-09-04', zh: '《無人載具產業發展條例》工程師版解讀', en: "Taiwan's Uncrewed Vehicle Industry Act, for Engineers" },
        { n: 46, week: '2027-W36', date: '2027-09-11', zh: '不只會飛：USV、UUV、UGV 工程差異', en: 'Beyond the Air: USV, UUV, UGV Engineering' },
        { n: 47, week: '2027-W37', date: '2027-09-18', zh: '戰場教訓：FPV、巡飛彈與成本交換比', en: 'Battlefield Lessons: FPV, Loitering Munitions, Cost Exchange' },
        { n: 48, week: '2027-W38', date: '2027-09-25', zh: '反無人機 C-UAS：干擾、欺騙、雷射、微波', en: 'Counter-UAS: Jamming, Spoofing, Lasers, Microwaves' },
        { n: 49, week: '2027-W39', date: '2027-10-02', zh: '給工程師的無人機職涯地圖', en: 'Drone Engineering Career Map' },
        { n: 50, week: '2027-W40', date: '2027-10-09', zh: "台灣的缺口與建議：測試場域、EOL、零件國產化", en: "Taiwan's Gaps and Recommendations" },
      ],
    },
    {
      id: 'g',
      title: '篇 G　收尾',
      weeks: [
        { n: 51, week: '2027-W41', date: '2027-10-16', zh: '實作總整理：一台機的完整開發紀錄', en: 'Capstone: A Full Build Log' },
        { n: 52, week: '2027-W42', date: '2027-10-23', zh: '一年回顧與下一步', en: 'A Year in Review and What\'s Next' },
      ],
    },
  ],
};
