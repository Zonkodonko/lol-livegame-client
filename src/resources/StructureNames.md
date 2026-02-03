Names of objectives like they occure when calling https://127.0.0.1:2999/liveclientdata/eventdata
Left is my naming. Right is riot.
In my naming I count the turrets starting from the middle of the map.

# Summoners Rift

### -------- Red --------
#### Lane Turrets
  Redside Bot 1 - Turret_TChaos_L0_P3_511845594  
  Redside Bot 2 - Turret_TChaos_L0_P2_528623213  
  Redside Bot 3 - Turret_TChaos_L0_P1_478290356  
  
  Redside Mid 1 - Turret_TChaos_L1_P3_2254202041  
  Redside Mid 2 - Turret_TChaos_L1_P2_2237424422  
  Redside Mid 3 - Turret_TChaos_L1_P1_2220646803  
  
  Redside Top 1 - Turret_TChaos_L2_P3_2521511112  
  Redside Top 2 - Turret_TChaos_L2_P2_2538288731  
  Redside Top 3 - Turret_TChaos_L2_P1_2555066350  

#### Nexus Turrets 
  Redside Nexus Turret Top - Turret_TChaos_L1_P4_392430785  
  Redside Nexus Turret Bottom - Turret_TChaos_L1_P5_342097928  

#### Inhibitors 
  Redside Inhib Bottom - Inhib_TChaos_L0_P1_2116220407  
  Redside Inhib Mid - Inhib_TChaos_L1_P1_1931666598  
  Redside Inhib Top - Inhib_TChaos_L2_P1_2351107073  


### -------- Blue --------
#### Lane Turrets 
  Blueside Bot 1 - Turret_TOrder_L0_P3_3795288474     
  Blueside Bot 2 - Turret_TOrder_L0_P2_3812066093  
  Blueside Bot 3 - Turret_TOrder_L0_P1_3761733236  

  Blueside Mid 1 - Turret_TOrder_L1_P3_1242677625  
  Blueside Mid 2 - Turret_TOrder_L1_P2_1225900006  
  Blueside Mid 3 - Turret_TOrder_L1_P1_1209122387  

  Blueside Top 1 - Turret_TOrder_L2_P3_1509986696  
  Blueside Top 2 - Turret_TOrder_L2_P2_1526764315  
  Blueside Top 3 - Turret_TOrder_L2_P1_1543541934  

#### Nexus Turrets 
  Blueside Nexus Turret Top - Turret_TOrder_L1_P5_3625540808 //beware Position P is mirrored in comparison to redside  
  Blueside Nexus Turret Bottom - Turret_TOrder_L1_P4_3675873665  

#### Inhibitors 
  Blueside Inhib Bot - Inhib_TOrder_L0_P1_2971077479  
  Blueside Inhib Mid - Inhib_TOrder_L1_P1_2786523670  
  Blueside Inhib Top - Inhib_TOrder_L2_P1_2669080337  


So the names are build like this: ``{Inhib|Turret}_T{Team}_L{lane}_P{position}_{weird random number/id}``

#### Lanes (Prefix L)
  Botlane = 0;   
  Midlane = 1;  *//Nexus turrets count as midlane*  
  Toplane = 2;

#### Positions (Prefix P)
  Outer Turret = 3;  
  Inner Turret = 2;  
  Inhib Turret & Inhib itself = 1;  

  Nexus Turret Top = 4|5 (for Blueside 5 , for Redside 4)  
  Nexus Turret Bot = 4|5 (for Bluside 4, for Redside 5)  

# Aram

### ---- Red ----
Redside Turret 1 = Turret_TChaos_L1_P3_671196429  
Redside Turret 2 = Turret_TChaos_L1_P2_620863572  

Redside Inhib = Inhib_TChaos_L1_P1_2432143522  

Redside Inhib Turret Top = Turret_TChaos_L1_P4_587308334  
Redside Inhib Turret Bot = Turret_TChaos_L1_P5_637641191  

### ---- Blue ----
Blueside Turret 1 = Turret_TOrder_L1_P3_2250400266  
Blueside Turret 2 = Turret_TOrder_L1_P2_2032291219  

Blueside Inhib = Inhib_TOrder_L1_P1_196971597  

Blueside Nexus Turret Top = Turret_TOrder_L1_P5_147739659  
Blueside Nexus Turret Bot = Turret_TOrder_L1_P4_2267177885  
