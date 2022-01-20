# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?destination=place_id:ChIJ0VhhNOkwXksRpZomuz5_M8o&origin=place_id:ChIJqcl8X94wXksRJrDodts-HkI&alternatives=true&departure_time=1653123600&avoid=highways&language=en&mode=walking&units=metric&waypoints=place_id:ChIJ-7YEkK87XksR6CT1WrLg9eE|place_id:ChIJNWtxD-1JXksRR8ixWLjI8io|place_id:ChIJq6qqqn8wXksRfFsnBjgFSrw&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJqcl8X94wXksRJrDodts-HkI",
         "types" : [ "establishment", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ-7YEkK87XksR6CT1WrLg9eE",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJNWtxD-1JXksRR8ixWLjI8io",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJq6qqqn8wXksRfFsnBjgFSrw",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ0VhhNOkwXksRpZomuz5_M8o",
         "types" : [ "establishment", "natural_feature" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 46.4539457,
               "lng" : -62.5803423
            },
            "southwest" : {
               "lat" : 46.4047408,
               "lng" : -62.7480153
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "5.8 km",
                  "value" : 5831
               },
               "duration" : {
                  "text" : "1 hour 11 mins",
                  "value" : 4265
               },
               "end_address" : "7621 St Peters Rd, Morell, PE C0A 1S0, Canada",
               "end_location" : {
                  "lat" : 46.4162654,
                  "lng" : -62.70131840000001
               },
               "start_address" : "302 Lighthouse Rd, Morell, PE C0A 1S0, Canada",
               "start_location" : {
                  "lat" : 46.4419449,
                  "lng" : -62.7476283
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1505
                     },
                     "duration" : {
                        "text" : "19 mins",
                        "value" : 1131
                     },
                     "end_location" : {
                        "lat" : 46.42986,
                        "lng" : -62.74293969999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eLighthouse Rd\u003c/b\u003e toward \u003cb\u003eSt Peters Harbour Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eThis road is closed in winter.\u003c/div\u003e",
                     "polyline" : {
                        "points" : "cumzGtk~}J@?D?`@Bb@Jb@Jt@PfAPb@Dv@DL@NCLCRM@A^Q`Ag@tCwAPENE^y@h@cGPeBB_@JI\\Y\\[@AlCUtEc@b@Eb@ELAbDc@lC]tEm@`@Gb@GtEm@b@GhBWb@Gb@EhBW"
                     },
                     "start_location" : {
                        "lat" : 46.4419449,
                        "lng" : -62.7476283
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2105
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1528
                     },
                     "end_location" : {
                        "lat" : 46.4144407,
                        "lng" : -62.7301319
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSt Peters Harbour Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sikzGjn}}JUuDAeAFsAJeALu@BQ^qAp@cB^WzBiBfBwA`CyAnFcDlAcA@CZ]x@_AZ_@NOj@i@\\[|@w@\\[xAsAz@w@^[@At@s@`@]VUp@e@t@c@JETM^UbEaC`CwAHC~HoE`DcAvCe@b@GvF}@b@I`Fw@"
                     },
                     "start_location" : {
                        "lat" : 46.42986,
                        "lng" : -62.74293969999999
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 km",
                        "value" : 2221
                     },
                     "duration" : {
                        "text" : "27 mins",
                        "value" : 1606
                     },
                     "end_location" : {
                        "lat" : 46.4162654,
                        "lng" : -62.70131840000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePE-2 E\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gihzGh~z}JQmDIeBAa@KuBO{CAc@[qGAY[yGKgBCs@S_ECs@AM]gHAMKaCOeDI{BSmEQcFGoBAWGcEAqC?cMQgOAs@IuGAiAAS?QAg@CeAAiAAw@AkAAmAKuEMgIAqBAg@"
                     },
                     "start_location" : {
                        "lat" : 46.4144407,
                        "lng" : -62.7301319
                     },
                     "travel_mode" : "WALKING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "10.4 km",
                  "value" : 10367
               },
               "duration" : {
                  "text" : "2 hours 6 mins",
                  "value" : 7555
               },
               "end_address" : "5544 St Peters Rd, Saint Peters Bay, PE C0A 2A0, Canada",
               "end_location" : {
                  "lat" : 46.417945,
                  "lng" : -62.5803423
               },
               "start_address" : "7621 St Peters Rd, Morell, PE C0A 1S0, Canada",
               "start_location" : {
                  "lat" : 46.4162654,
                  "lng" : -62.70131840000001
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "9.9 km",
                        "value" : 9918
                     },
                     "duration" : {
                        "text" : "2 hours 0 mins",
                        "value" : 7205
                     },
                     "end_location" : {
                        "lat" : 46.4149799,
                        "lng" : -62.5807851
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003ePE-2 E\u003c/b\u003e toward \u003cb\u003eRiverside Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uthzGfju}J?A?O?{@?Y@MH]BGDMJYLYPg@Le@F]BKDc@?A@YBUBk@?KFeBBs@?KBg@Bc@P{@Rs@Tm@Ra@Xo@j@eAXg@Zs@N]L[Z}@Ni@DOBIPy@ZyABMf@aCZyA@CJi@Lm@Nw@Ji@Lk@Lo@Lk@ZcBX_BLo@Hi@p@{Fx@aGRwAf@cDZeCX{Bh@eDNu@XmAZkAL]`@gAv@iBxAsCrAeCbAkBx@cBTs@BILc@H[No@Ly@Hq@Dm@Bg@@e@?c@JiH@o@BoE?IHcDDkBLcCJ_BJkAPiBX_CVuA`@oBb@sBh@sBBG`@sATo@Nc@BGv@qBx@iBhAgCn@wAj@oAl@}APq@HWFULo@DQRoAJyAFeB@iBGkBKkAOgAMm@Oo@Sm@Su@g@eAe@{@sAyBc@q@s@gAYc@s@gAYc@aD_F{BkDk@}@a@o@IMMW_@o@m@iAcAwCm@yBkAyEk@aCMm@AA{@mDCKo@uCKg@q@aDo@oDUaBa@yCGk@e@mDOkAk@oEQ{A_@uCScBKy@WiCAEOuBMuAm@qHaAaO}AySg@mHo@aJCq@OyCCs@OyCCc@AOIgBEs@Cq@Es@ASA_@Es@a@kI[_HA_@ASSmEAIAi@I_CA[As@EoB?k@As@?s@?S?_@As@?_CJqE@YDgB@[LoCNiCBg@^mGf@qHl@gJDs@Fq@b@uGNaEt@yOBs@FiAJcCDs@Bs@Dq@?ABq@HgBF}AB}@FgBB_@NaFDgBH{CDgB@s@@gB?s@CcDCm@EiAA[C_AEg@Es@Ei@g@{EQ{AK_AIwAAICi@IeBCs@Ck@AGCs@OyCCs@Cm@AEIgBEq@Cc@GcAEu@ScFm@iO"
                     },
                     "start_location" : {
                        "lat" : 46.4162654,
                        "lng" : -62.70131840000001
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 338
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 256
                     },
                     "end_location" : {
                        "lat" : 46.4179257,
                        "lng" : -62.5817134
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003ePE-2 E\u003c/b\u003e (signs for \u003cb\u003eSouris\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePE-313 N\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "slhzG|x}|Jg@LeAXc@JmD`AcBd@c@Le@N_@N[IOCSC"
                     },
                     "start_location" : {
                        "lat" : 46.4149799,
                        "lng" : -62.5807851
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 111
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 46.417945,
                        "lng" : -62.5803423
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003ePE-2 E\u003c/b\u003e (signs for \u003cb\u003eSouris\u003c/b\u003e)\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a_izGt~}|JCICKIUCSE]C]?SBQL}@Jq@"
                     },
                     "start_location" : {
                        "lat" : 46.4179257,
                        "lng" : -62.5817134
                     },
                     "travel_mode" : "WALKING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "5.3 km",
                  "value" : 5314
               },
               "duration" : {
                  "text" : "1 hour 5 mins",
                  "value" : 3896
               },
               "end_address" : "959 Greenwich Rd, Saint Peters Bay, PE C0A 2A0, Canada",
               "end_location" : {
                  "lat" : 46.4364323,
                  "lng" : -62.6386036
               },
               "start_address" : "5544 St Peters Rd, Saint Peters Bay, PE C0A 2A0, Canada",
               "start_location" : {
                  "lat" : 46.417945,
                  "lng" : -62.5803423
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 111
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 78
                     },
                     "end_location" : {
                        "lat" : 46.4179257,
                        "lng" : -62.5817134
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003ePE-2 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "c_izGbv}|JKp@M|@CP?RB\\D\\BRHTBJBH"
                     },
                     "start_location" : {
                        "lat" : 46.417945,
                        "lng" : -62.5803423
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 109
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 101
                     },
                     "end_location" : {
                        "lat" : 46.4184712,
                        "lng" : -62.5828428
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePE-16 E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePE-313 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a_izGt~}|JCb@CVGd@_@j@{@rA"
                     },
                     "start_location" : {
                        "lat" : 46.4179257,
                        "lng" : -62.5817134
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 521
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 448
                     },
                     "end_location" : {
                        "lat" : 46.4221623,
                        "lng" : -62.5852714
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBay Shore Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mbizGve~|JaAdCiBrESh@_A|BGNADCFEDCBA?EDG@E@E@E?A?a@G[CGAc@Ea@GgAKc@EgAMa@Gc@E_@E"
                     },
                     "start_location" : {
                        "lat" : 46.4184712,
                        "lng" : -62.5828428
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "4.6 km",
                        "value" : 4573
                     },
                     "duration" : {
                        "text" : "54 mins",
                        "value" : 3269
                     },
                     "end_location" : {
                        "lat" : 46.4364323,
                        "lng" : -62.6386036
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGreenwich Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePE-313 N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "oyizG|t~|JcAfGMb@qB|HUn@qCjHCFqA|CUf@Uh@Uh@mBlEUh@Uh@wAdDuAdDoBjEsDdIwBxE}B~CeB`CiB|Bw@`A}@jAm@|@Yb@yA|BKRaAxB{AfDe@pAoAlDSj@{@`CSh@KVo@dDMp@o@bDOlAk@fEg@~EIr@MtAK~@Gr@QbBGr@Gn@KnBAr@Al@?r@An@@rE@hB?fBChFAn@?BKnEG|ASvEEr@MzCIfBIdBEr@Cr@Cr@MzCOlECr@Ah@GdDQtMAr@GpDIlFS`L?P]`ICp@WbGKnEIlD"
                     },
                     "start_location" : {
                        "lat" : 46.4221623,
                        "lng" : -62.5852714
                     },
                     "travel_mode" : "WALKING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "4.7 km",
                  "value" : 4655
               },
               "duration" : {
                  "text" : "56 mins",
                  "value" : 3348
               },
               "end_address" : "Greenwich Beach, Prince Edward Island, Canada",
               "end_location" : {
                  "lat" : 46.4539457,
                  "lng" : -62.6861366
               },
               "start_address" : "959 Greenwich Rd, Saint Peters Bay, PE C0A 2A0, Canada",
               "start_location" : {
                  "lat" : 46.4364323,
                  "lng" : -62.6386036
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "3.4 km",
                        "value" : 3410
                     },
                     "duration" : {
                        "text" : "41 mins",
                        "value" : 2436
                     },
                     "end_location" : {
                        "lat" : 46.443952,
                        "lng" : -62.6803973
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003eGreenwich Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePE-313 N\u003c/b\u003e toward \u003cb\u003ePE-336 E\u003c/b\u003e",
                     "polyline" : {
                        "points" : "urlzGfbi}JK|DCfBItC?D?fBAr@ApEItDAzBEdG?r@Ar@?HA|AAr@IvHCnCChDAr@AfBArAC|BAfBAr@EbGAlAGtD?TE\\UdC[rBKp@Kn@iAfHKn@kBxL{@tFiAfHKn@Kp@sAvI}@tFKn@o@dE{@tFKn@?@s@jE[rAQt@a@hA{AjDABuA~CUh@oBjEUh@MVGNUh@Uf@m@rAaAxBg@jACD[x@WlAETItBFpBl@hEJn@"
                     },
                     "start_location" : {
                        "lat" : 46.4364323,
                        "lng" : -62.6386036
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1058
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 775
                     },
                     "end_location" : {
                        "lat" : 46.4531196,
                        "lng" : -62.6840778
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWild Rose Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eThis road is closed in winter.\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "uanzGngq}JyCfAa@NeA^a@La@La@Lk@NiBf@MBiBf@cAVmD~@mCv@gBh@gBf@GB[HqCv@[HqBj@{@VqA^UHw@VcA`@"
                     },
                     "start_location" : {
                        "lat" : 46.443952,
                        "lng" : -62.6803973
                     },
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 187
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 137
                     },
                     "end_location" : {
                        "lat" : 46.4539457,
                        "lng" : -62.6861366
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "_{ozGn~q}JILMXKZOj@Mh@Q~@g@~BIb@A@?BA@?@A@?@A@A@?@A@A@A@A?A@A?A?A@A?A?A?"
                     },
                     "start_location" : {
                        "lat" : 46.4531196,
                        "lng" : -62.6840778
                     },
                     "travel_mode" : "WALKING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "cumzGtk~}JF?dANxA\\jBVdAFNC`@Q`@SvE_C`@K^y@h@cGTeChAaAjLeAtYwDzG}@UuDAeAFsAJeAPgA^qAp@cBzCaCfBwA`CyAnFcDlAcA\\a@tA_Bz@y@rEcErCiCx@s@fBiAdGkDjC{A~HoE`DcAzDm@zGgA`Fw@QmDKgCy@gQeBy^g@qLo@yPIuI?cMQgOKiIC}AGiEQgLQcN@sB^mA^aATcAJkAFaAFqBJkCP{@Rs@h@oAzBqE\\y@j@gBv@mDhAmFzBeLf@oCz@eHpCcSbAaHh@cCh@iBxAqDjHiNp@}B\\iBN_BDmAJmID_GHmDRoFVkDj@iFx@eEb@sBh@sBd@{A`BmE~EyK~@oCPm@RaARoAJyAHoEGkBKkA]uBc@}ASu@g@eAyBuDeDeFcJmNyAeCm@iAcAwCyBsIwB_JqBkJo@oDUaBi@eEsBePwA}LmAcOwFkx@}@iRsAyYYuGS_IAgDAsA?_CJqEFaCNkDzAqV~AcVpAyYp@wO^gLTkJBoEGqEGeBUeEy@wHUwCSmEYaGk@_LaAmVmBf@yI`CeA^k@MSCCIMa@Iq@Cq@PoAJq@Kp@QnABp@Hp@L`@BHCb@K|@{A~BkDxI}A|DOPYJeAKgI}@_@EcAfG_C`JgDzIuAdDoDhIyE~KcHpOwBxE}B~CoE~FuBlCgA`BeBpC}C`HuB~FoBnF}@vEo@bDOlAk@fEg@~EWhCm@jGS~CC`B@`LEdKSlHYjGg@|Ke@pME|AYzRg@tZy@hSe@bTIzCAzCApEItDG`KCnESdTUzYGjE[bD}B|NgLvt@cCzOs@lEm@hCa@hA{AjDwAbDiDvHaBtDiCdG]bBItBFpBx@xF{DvAkDhAmGbBgNxD}GlB{GlBmA`@cA`@ILYt@]tAeAdFGPOHE?"
         },
         "summary" : "Lighthouse Rd, St Peters Harbour Rd and PE-2 E",
         "warnings" : [
            "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
         ],
         "waypoint_order" : [ 0, 1, 2 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
