var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["16d0bab5-032b-439f-beca-9b1508a085dc","998a6496-f60e-4cdc-a1df-a484b9e5ec75","1f1a9322-3fea-4d83-b6f4-abf0793f2044","11d58775-9603-40de-9863-b0255e57e331","bbbdabe9-738a-432f-8d2f-a73009b03551","3af90b28-26a0-4f38-b890-962450ce91d8","114257c6-8be0-4688-b246-56b39f86c81b","32b0cebd-8071-427e-8665-d43bad7326ad","25ee8470-2f58-4261-ba12-7a5c007d82e2","03e27f62-d554-414c-8c18-94a95a950903","5eb5a359-9edb-4727-b510-12ced47e51b2","54c598f5-cb42-4cb0-ade5-0ae5e1301292","fe50dbbb-addf-4744-8fd0-74afa85b0955","92abbe99-99f3-4ce7-8b43-890b6b54ef65","6eb4b5ae-9b89-4e43-9ea5-3a9aaea1ef4a","0b76ff74-2039-4d8d-87a0-2e583902991c","70d4691c-7737-49c8-82da-b6c1fd732fb3","a2bf8b2e-40c6-4460-9ada-0eda995b6dc0","ec446d4b-1d5a-4c26-902b-58add3f8d8ec","b028599c-9da1-4ec5-86e3-380bd26abfc9","7c88d806-2766-4e1d-9085-aa6b0ee733f5","ead687ee-8f0f-409f-a5e5-886179f48fac","b8c22572-bad3-4be6-bcb8-1f26933ec4d8","f8e2be5f-ea13-4f36-89dd-3d09f57384eb","814e3f90-f425-43cc-a24f-3f7e01590ea9","c3cf72da-2d66-4fd9-a005-e0599c092e9f","ccc9e8aa-8a6a-4e9a-b6b1-68c815a2873c","44079f60-81c6-427a-a3d7-b5b90e12f151","10532208-a349-4954-8490-b96f6199d937","b8fe9906-5d19-4d22-a76b-f8292701033a","c8833822-03b9-42bc-8e3e-6e9ba4bff2b2","26bd1cfa-7890-4ea0-9a36-3db0f44c65e0","f901c4f7-dfa3-4d5f-b369-718f3b5ca96e","b0a7cd93-ebdd-4622-a5c3-262e563b8eae","ae652a22-ec7b-46dc-8ca9-5910f6c5ecd5","ecf7227d-e1c1-40ca-bdac-b32983c20ac0","62fd4454-4997-47ec-84f4-af37ddc48543","3733d4cd-8218-4c8d-8375-9d0a61bfd954","7e03bd5a-4806-4e42-a73e-3d0f5ce6d7f9","2ae1d8d3-3432-4f6e-bbba-f9a500a102d2"],"propsByKey":{"16d0bab5-032b-439f-beca-9b1508a085dc":{"name":"Coin","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"Z.Ja1GCT7HzswqSqE_BA4.j2rbjYlcWF","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/16d0bab5-032b-439f-beca-9b1508a085dc.png"},"998a6496-f60e-4cdc-a1df-a484b9e5ec75":{"name":"Coin1","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/998a6496-f60e-4cdc-a1df-a484b9e5ec75.png","frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":4,"version":"PKj_k_gdP4gEtrWn.1u70kf4XpL9sDdI","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/998a6496-f60e-4cdc-a1df-a484b9e5ec75.png"},"1f1a9322-3fea-4d83-b6f4-abf0793f2044":{"name":"Coin2","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"AL8mqHiNX8gM8EpnjDtcftW_odjPUv2_","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/1f1a9322-3fea-4d83-b6f4-abf0793f2044.png"},"11d58775-9603-40de-9863-b0255e57e331":{"name":"coin3","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"y5sMAmSm1KYtCrDP5cc0VbmUd.I71Ivf","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/11d58775-9603-40de-9863-b0255e57e331.png"},"bbbdabe9-738a-432f-8d2f-a73009b03551":{"name":"plat","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/bbbdabe9-738a-432f-8d2f-a73009b03551.png","frameSize":{"x":400,"y":205},"frameCount":1,"looping":true,"frameDelay":4,"version":"0CzFDscf73UbsLWVLyslGtzlSc0hd97B","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":205},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/bbbdabe9-738a-432f-8d2f-a73009b03551.png"},"3af90b28-26a0-4f38-b890-962450ce91d8":{"name":"plat2","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/3af90b28-26a0-4f38-b890-962450ce91d8.png","frameSize":{"x":400,"y":227},"frameCount":1,"looping":true,"frameDelay":4,"version":"jqLVGTppfNm14R31DwItj7NGGKlHPKY1","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":227},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/3af90b28-26a0-4f38-b890-962450ce91d8.png"},"114257c6-8be0-4688-b246-56b39f86c81b":{"name":"plat3","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/114257c6-8be0-4688-b246-56b39f86c81b.png","frameSize":{"x":400,"y":227},"frameCount":1,"looping":true,"frameDelay":4,"version":"9Ljqf9xshfpp5Xio1ZCv5_psaPod2dD8","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":227},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/114257c6-8be0-4688-b246-56b39f86c81b.png"},"32b0cebd-8071-427e-8665-d43bad7326ad":{"name":"plat4","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/32b0cebd-8071-427e-8665-d43bad7326ad.png","frameSize":{"x":397,"y":218},"frameCount":1,"looping":true,"frameDelay":4,"version":"SBJhciA2hzvXWA2pTTSftpiIr_Cb96nM","loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":218},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/32b0cebd-8071-427e-8665-d43bad7326ad.png"},"25ee8470-2f58-4261-ba12-7a5c007d82e2":{"name":"char1","sourceUrl":null,"frameSize":{"x":100,"y":169},"frameCount":5,"looping":true,"frameDelay":2,"version":"jxGZUJugugRv1C4TUetQw08CSQAlux1J","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":338},"rootRelativePath":"assets/25ee8470-2f58-4261-ba12-7a5c007d82e2.png"},"03e27f62-d554-414c-8c18-94a95a950903":{"name":"lifes","sourceUrl":null,"frameSize":{"x":100,"y":169},"frameCount":1,"looping":true,"frameDelay":12,"version":"9c.2Du3UPj4Tx56teX4JBlUMp0nJKBIA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":169},"rootRelativePath":"assets/03e27f62-d554-414c-8c18-94a95a950903.png"},"5eb5a359-9edb-4727-b510-12ced47e51b2":{"name":"obstacle2","sourceUrl":null,"frameSize":{"x":220,"y":220},"frameCount":1,"looping":true,"frameDelay":12,"version":"zduLAHPyVPv4Cj6hDDHCARy9gVl2BzFC","loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":220},"rootRelativePath":"assets/5eb5a359-9edb-4727-b510-12ced47e51b2.png"},"54c598f5-cb42-4cb0-ade5-0ae5e1301292":{"name":"obstacle1","sourceUrl":null,"frameSize":{"x":207,"y":250},"frameCount":1,"looping":true,"frameDelay":12,"version":"cjZyl_7SrJ2HjJ7HjK2XLEQ2G_06CZ4K","loadedFromSource":true,"saved":true,"sourceSize":{"x":207,"y":250},"rootRelativePath":"assets/54c598f5-cb42-4cb0-ade5-0ae5e1301292.png"},"fe50dbbb-addf-4744-8fd0-74afa85b0955":{"name":"btn1","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/fe50dbbb-addf-4744-8fd0-74afa85b0955.png","frameSize":{"x":204,"y":105},"frameCount":1,"looping":true,"frameDelay":4,"version":"lJCAxnV1dVyltPaLGhc.nDIgXto5Dyqw","loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":105},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/fe50dbbb-addf-4744-8fd0-74afa85b0955.png"},"92abbe99-99f3-4ce7-8b43-890b6b54ef65":{"name":"char2","sourceUrl":null,"frameSize":{"x":107,"y":155},"frameCount":5,"looping":true,"frameDelay":3,"version":"decPN4XQ4ZezhtJTNTCyfE.vYkKt34e7","loadedFromSource":true,"saved":true,"sourceSize":{"x":321,"y":310},"rootRelativePath":"assets/92abbe99-99f3-4ce7-8b43-890b6b54ef65.png"},"6eb4b5ae-9b89-4e43-9ea5-3a9aaea1ef4a":{"name":"man","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"0b76ff74-2039-4d8d-87a0-2e583902991c":{"name":"lfe","sourceUrl":null,"frameSize":{"x":107,"y":155},"frameCount":1,"looping":true,"frameDelay":12,"version":"X8WdgqmyxbQw5mAkdDG9it9UbmWX18J.","loadedFromSource":true,"saved":true,"sourceSize":{"x":107,"y":155},"rootRelativePath":"assets/0b76ff74-2039-4d8d-87a0-2e583902991c.png"},"70d4691c-7737-49c8-82da-b6c1fd732fb3":{"name":"distance","sourceUrl":null,"frameSize":{"x":983,"y":985},"frameCount":1,"looping":true,"frameDelay":12,"version":"iDzbRoxh6uj95xN_LHBxQqVS.LF_rDUJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":983,"y":985},"rootRelativePath":"assets/70d4691c-7737-49c8-82da-b6c1fd732fb3.png"},"a2bf8b2e-40c6-4460-9ada-0eda995b6dc0":{"name":"distance_copy_1","sourceUrl":null,"frameSize":{"x":983,"y":985},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ob8mC8Z1.PARMaZSP_66ivm3gf3YpHrS","loadedFromSource":true,"saved":true,"sourceSize":{"x":983,"y":985},"rootRelativePath":"assets/a2bf8b2e-40c6-4460-9ada-0eda995b6dc0.png"},"ec446d4b-1d5a-4c26-902b-58add3f8d8ec":{"name":"char3","sourceUrl":null,"frameSize":{"x":307,"y":409},"frameCount":4,"looping":true,"frameDelay":5,"version":"OxerqGUy7VrhFemHz3w6dhpXlTn7yV0O","loadedFromSource":true,"saved":true,"sourceSize":{"x":614,"y":818},"rootRelativePath":"assets/ec446d4b-1d5a-4c26-902b-58add3f8d8ec.png"},"b028599c-9da1-4ec5-86e3-380bd26abfc9":{"name":"life3","sourceUrl":null,"frameSize":{"x":293,"y":393},"frameCount":1,"looping":true,"frameDelay":12,"version":"eXKI0INEE.KEyE7BS1IgLEyfof2dqX5r","loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":393},"rootRelativePath":"assets/b028599c-9da1-4ec5-86e3-380bd26abfc9.png"},"7c88d806-2766-4e1d-9085-aa6b0ee733f5":{"name":"char4","sourceUrl":null,"frameSize":{"x":448,"y":744},"frameCount":6,"looping":true,"frameDelay":3,"version":"GiOJyPhao1OcD59NRijWjV.yljRLkJ92","loadedFromSource":true,"saved":true,"sourceSize":{"x":1344,"y":1488},"rootRelativePath":"assets/7c88d806-2766-4e1d-9085-aa6b0ee733f5.png"},"ead687ee-8f0f-409f-a5e5-886179f48fac":{"name":"life4","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/ead687ee-8f0f-409f-a5e5-886179f48fac.png","frameSize":{"x":438,"y":451},"frameCount":1,"looping":true,"frameDelay":4,"version":"ikacBbUKMud2rllIdTSXxZJmry9TnSVF","loadedFromSource":true,"saved":true,"sourceSize":{"x":438,"y":451},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/ead687ee-8f0f-409f-a5e5-886179f48fac.png"},"b8c22572-bad3-4be6-bcb8-1f26933ec4d8":{"name":"char5","sourceUrl":null,"frameSize":{"x":307,"y":445},"frameCount":5,"looping":true,"frameDelay":4,"version":".sxna.3tIxXkJdxbjrhpbGVt8MbQuWGJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":921,"y":890},"rootRelativePath":"assets/b8c22572-bad3-4be6-bcb8-1f26933ec4d8.png"},"f8e2be5f-ea13-4f36-89dd-3d09f57384eb":{"name":"life5","sourceUrl":null,"frameSize":{"x":295,"y":277},"frameCount":1,"looping":true,"frameDelay":12,"version":"aIMeqci0sMr9jx8itDtvt54u_BWDZSTa","loadedFromSource":true,"saved":true,"sourceSize":{"x":295,"y":277},"rootRelativePath":"assets/f8e2be5f-ea13-4f36-89dd-3d09f57384eb.png"},"814e3f90-f425-43cc-a24f-3f7e01590ea9":{"name":"end","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/814e3f90-f425-43cc-a24f-3f7e01590ea9.png","frameSize":{"x":466,"y":363},"frameCount":1,"looping":true,"frameDelay":4,"version":"c0qtWdVwp07M8954YpVToDvqvuxrEBWg","loadedFromSource":true,"saved":true,"sourceSize":{"x":466,"y":363},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/814e3f90-f425-43cc-a24f-3f7e01590ea9.png"},"c3cf72da-2d66-4fd9-a005-e0599c092e9f":{"name":"end_copy_1","sourceUrl":null,"frameSize":{"x":466,"y":363},"frameCount":1,"looping":true,"frameDelay":12,"version":"5fGn5qlJZ0tx0229jk2cXIRaMAOdbTp2","loadedFromSource":true,"saved":true,"sourceSize":{"x":466,"y":363},"rootRelativePath":"assets/c3cf72da-2d66-4fd9-a005-e0599c092e9f.png"},"ccc9e8aa-8a6a-4e9a-b6b1-68c815a2873c":{"name":"home","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/ccc9e8aa-8a6a-4e9a-b6b1-68c815a2873c.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"cvEJfCUwvp9hnmc_Phu2dfYU2tu2D2SK","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/ccc9e8aa-8a6a-4e9a-b6b1-68c815a2873c.png"},"44079f60-81c6-427a-a3d7-b5b90e12f151":{"name":"coin22","sourceUrl":null,"frameSize":{"x":219,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"0YdFaK_YkgzfZSODzD4MIv6xxC1N8pyt","loadedFromSource":true,"saved":true,"sourceSize":{"x":219,"y":240},"rootRelativePath":"assets/44079f60-81c6-427a-a3d7-b5b90e12f151.png"},"10532208-a349-4954-8490-b96f6199d937":{"name":"obstacle4","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"0zzLjk.KY979KjfBCaSiRZMDxNpXA6XT","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/10532208-a349-4954-8490-b96f6199d937.png"},"b8fe9906-5d19-4d22-a76b-f8292701033a":{"name":"obstacle3","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"PVM3zQuQEKnDObsIyetV_akDuFQEvv3L","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/b8fe9906-5d19-4d22-a76b-f8292701033a.png"},"c8833822-03b9-42bc-8e3e-6e9ba4bff2b2":{"name":"bg9","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/c8833822-03b9-42bc-8e3e-6e9ba4bff2b2.png","frameSize":{"x":360,"y":240},"frameCount":1,"looping":true,"frameDelay":4,"version":"lD2t.jt7sqkxMWtkAcx40CjeerIOxHFu","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":240},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/c8833822-03b9-42bc-8e3e-6e9ba4bff2b2.png"},"26bd1cfa-7890-4ea0-9a36-3db0f44c65e0":{"name":"bg2","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/26bd1cfa-7890-4ea0-9a36-3db0f44c65e0.png","frameSize":{"x":417,"y":240},"frameCount":1,"looping":true,"frameDelay":4,"version":"cTtTYBnFFULvDfwjhfeCwYXjQyCVKIDU","loadedFromSource":true,"saved":true,"sourceSize":{"x":417,"y":240},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/26bd1cfa-7890-4ea0-9a36-3db0f44c65e0.png"},"f901c4f7-dfa3-4d5f-b369-718f3b5ca96e":{"name":"logo","sourceUrl":null,"frameSize":{"x":425,"y":284},"frameCount":1,"looping":true,"frameDelay":12,"version":"Jkqyzp3skrPV0K1jjOgg17zALS7O1D4r","loadedFromSource":true,"saved":true,"sourceSize":{"x":425,"y":284},"rootRelativePath":"assets/f901c4f7-dfa3-4d5f-b369-718f3b5ca96e.png"},"b0a7cd93-ebdd-4622-a5c3-262e563b8eae":{"name":"logo1","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/b0a7cd93-ebdd-4622-a5c3-262e563b8eae.png","frameSize":{"x":367,"y":127},"frameCount":1,"looping":true,"frameDelay":4,"version":"r9k_P0IB.L3aB0C7urt7rZ7LNdbJUWgM","loadedFromSource":true,"saved":true,"sourceSize":{"x":367,"y":127},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/b0a7cd93-ebdd-4622-a5c3-262e563b8eae.png"},"ae652a22-ec7b-46dc-8ca9-5910f6c5ecd5":{"name":"7","sourceUrl":null,"frameSize":{"x":240,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"kn6AVhZbcPd5SVDxwVpHR3Jclw9A7Nqe","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":240},"rootRelativePath":"assets/ae652a22-ec7b-46dc-8ca9-5910f6c5ecd5.png"},"ecf7227d-e1c1-40ca-bdac-b32983c20ac0":{"name":"bg3","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/ecf7227d-e1c1-40ca-bdac-b32983c20ac0.png","frameSize":{"x":360,"y":240},"frameCount":1,"looping":true,"frameDelay":4,"version":"MN6XjP76sdnvhCZ_94GJz2ByTAI9NIZs","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":240},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/ecf7227d-e1c1-40ca-bdac-b32983c20ac0.png"},"62fd4454-4997-47ec-84f4-af37ddc48543":{"name":"bg6","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/62fd4454-4997-47ec-84f4-af37ddc48543.png","frameSize":{"x":310,"y":163},"frameCount":1,"looping":true,"frameDelay":4,"version":"aYsF9fNTr1UVVDSasSBaO1rVAHOzAX.H","loadedFromSource":true,"saved":true,"sourceSize":{"x":310,"y":163},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/62fd4454-4997-47ec-84f4-af37ddc48543.png"},"3733d4cd-8218-4c8d-8375-9d0a61bfd954":{"name":"st","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/3733d4cd-8218-4c8d-8375-9d0a61bfd954.png","frameSize":{"x":700,"y":700},"frameCount":1,"looping":true,"frameDelay":4,"version":"xS705xe5WEg.dLwEY5y5Usx5y1oNXfxj","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":700},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/3733d4cd-8218-4c8d-8375-9d0a61bfd954.png"},"7e03bd5a-4806-4e42-a73e-3d0f5ce6d7f9":{"name":"bg","sourceUrl":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/7e03bd5a-4806-4e42-a73e-3d0f5ce6d7f9.png","frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":4,"version":"c8njaZo1PtB4lWWOKJU8tQPikroZkyC9","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/v3/animations/YnlGmc4U0PPngZKfUAn9tkCJZckUUMVu8TgtJfLHY_0/7e03bd5a-4806-4e42-a73e-3d0f5ce6d7f9.png"},"2ae1d8d3-3432-4f6e-bbba-f9a500a102d2":{"name":"obsyac","sourceUrl":"assets/api/v1/animation-library/gamelab/m9x6KVw.tjQn.uHWZ7WAZptfOwgt_9mC/category_obstacles/ore_ironAlt.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"m9x6KVw.tjQn.uHWZ7WAZptfOwgt_9mC","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/m9x6KVw.tjQn.uHWZ7WAZptfOwgt_9mC/category_obstacles/ore_ironAlt.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var coins = 0;

var distance = 1;
var gameStage = "start";
var time = 0;

var x = randomNumber(3,5);
 var lifes = x;

  var In = createSprite(350,80,30,50);
In.setAnimation("coin22");
In.scale = 0.5;
In.depth = 0;

  var coino = createSprite(200,65,20,20);
  coino.setAnimation("Coin2");
  coino.depth = 0;
  var st = createSprite(200,200);
  st.setAnimation("st");
  


 var logo = createSprite(200,100);
 logo.setAnimation("logo");
 logo.scale = 1.1;
 var bg = createSprite(200,200);
  bg.setAnimation("bg");
  bg.scale = 2.5;
  var btn1 = createSprite(200,230);
  btn1.setAnimation("btn1");
  btn1.scale = 0.8;
  // var btn2 = createSprite(200,330);
  // btn2.setAnimation("btn1");
  // btn2.scale = 0.8;
  btn1.depth = 20;
  bg.depth= 19;
  logo.depth = 21;
  // btn2.depth = 20;
  
  var bg2 = createSprite(200,200);
  bg2.setAnimation("bg2");
  bg2.scale = 3.2;
  var char1btn = createSprite(60,250);
  char1btn.setAnimation("lifes");
  var char2btn = createSprite(340,250);
  char2btn.setAnimation("lfe");
   var char3btn = createSprite(60,380);
  char3btn.setAnimation("life3");
  char3btn.scale = 0.3;
  var char4btn = createSprite(340,350);
  char4btn.setAnimation("life4");
  char4btn.scale = 0.2;
   var char5btn = createSprite(200,300);
  char5btn.setAnimation("life5");
  char5btn.scale = 0.3;
  
  bg2.depth = 0;
  char1btn.depth = 0;
  char2btn.depth = 0;
  char3btn.depth = 0;
  char4btn.depth = 0;
  char5btn.depth = 0;
  
  
  
 var distance1 = createSprite(170,40);
 distance1.setAnimation("distance");
 distance1.scale = 0.06;

 
var coin1 = createSprite(330,50);
coin1.setAnimation("Coin1");
 coin1.depth = 18;

var char =  createSprite(50,271);
char.setAnimation("man");
char.scale = 0.5;
distance1.depth = coin1.depth;
// char.debug = true;
char.setCollider("rectangle",100,0);

var platform = createSprite(0,205);
 platform.setAnimation("plat");
 platform.x = platform.width/2;
 platform.scale=2;
 platform.depth = 2;
// var bg = createSprite(200,150);
// bg.setAnimation("bg");
// bg.depth = 1;
 char.depth = platform.depth+0.5;

 var life = createSprite(30,60);
life.setAnimation("lifes");
life.depth= platform.depth+2;
life.scale = 0.4;
 
 var supportPlat = createSprite(200,375,400,10);
 supportPlat.visible= false;
 
 var coinGroup = createGroup(); 
 var enemyGroup = createGroup();
 
  var coin22 = createSprite(340,60,30,50);
 coin22.setAnimation("coin22");
 coin22.scale = 0.45;
 ;;
coin22.depth=0;
 
function draw() {
playSound("fantasy.mp3", false);
coino.x = World.mouseX;
  coino.y = coin22.y;
if (mousePressedOver(btn1)) {
 gameStage = "char";
 bg.depth=0;
 bg2.depth = 29;
 char1btn.depth = 31;
 char2btn.depth = 31;
 char3btn.depth = 31;
  char4btn.depth = 31;
  char5btn.depth = 31;
  coin22.depth = 35;
coino.depth = 36;
 btn1.depth = 0;
 logo.depth = 0;
 
 
// btn2.depth = 0; 
}


if (mousePressedOver(char1btn)) {
    platform.velocityX = -4;
char.velocityY = 2; 
char.setAnimation("char1");
life.setAnimation("lifes");
  char3btn.depth = 0;
  char4btn.depth = 0;
  char5btn.depth = 0;
 bg.depth=0;
 bg2.depth = 0;
 char1btn.depth = 0;
 char2btn.depth = 0;
 btn1.depth = 0;
 logo.depth = 0;
// btn2.depth = 0;
// distance=distance+1;
gameStage = "play";
}
if (coino.isTouching(coin22)){
    textSize(30);
    text(x,100,100);
    coino.x = 320;
    coino.setAnimation("coin3");
    // coino.depth = coin22.depth-1;
}
if (mousePressedOver(char2btn)) {
    platform.velocityX = -4;
char.velocityY = 2; 
char.setAnimation("char2");
life.setAnimation("lfe");
bg.depth=0;
char3btn.depth = 0;
  char4btn.depth = 0;
  char5btn.depth = 0;
btn1.depth = 0;    
logo.depth = 0;
// btn2.depth =0;
// bg2.depth = 0;
 char1btn.depth = 0;
 char2btn.depth = 0;
 bg2.depth = 0;
 gameStage = "play";
}
if (mousePressedOver(char3btn)) {
    platform.velocityX = -4;
char.velocityY = 2; 
char.setAnimation("char3");
char.scale = 0.2;
life.setAnimation("life3");
  life.scale = 0.2;
 bg.depth=0;
 bg2.depth = 0;
 char1btn.depth = 0;
 char2btn.depth = 0;
 char3btn.depth = 0;
  char4btn.depth = 0;
  char5btn.depth = 0;
 btn1.depth = 0;
 logo.depth = 0;
// btn2.depth = 0;
// distance=distance+1;
gameStage = "play";
}
if (mousePressedOver(char4btn)) {
    platform.velocityX = -4;
char.velocityY = 2; 
char.setAnimation("char4");
char.scale = 0.1;
life.setAnimation("life4");
  life.scale = 0.1;
  life.y =50;
 bg.depth=0;
 bg2.depth = 0;
 char1btn.depth = 0;
 char2btn.depth = 0;
 char3btn.depth = 0;
  char4btn.depth = 0;
  char5btn.depth = 0;
 btn1.depth = 0;
 logo.depth = 0;
// btn2.depth = 0;
// distance=distance+1;
gameStage = "play";
}
if (mousePressedOver(char5btn)) {
    platform.velocityX = -4;
char.velocityY = 2; 
char.setAnimation("char5");
char.scale = 0.2;
life.setAnimation("life5");
  life.scale = 0.1;
  life.y =50;
 bg.depth=0;
 bg2.depth = 0;
 char1btn.depth = 0;
 char2btn.depth = 0;
 char3btn.depth = 0;
  char4btn.depth = 0;
  char5btn.depth = 0;
 btn1.depth = 0;
 logo.depth = 0;
// btn2.depth = 0;
// distance=distance+1;
gameStage = "play";
}


if (distance1 === 0) {
  char.bounceOff(supportPlat);
}
char.collide(supportPlat);




// spawnCoins();
// spawnEnemies ();
 background("white");
 if (platform.x === 0) {
   platform.x = platform.width/2;
 }
if (char.y > 230) {
  if (keyDown("space" )) {
   char.velocityY = -15;
   if (char.isTouching(enemyGroup)) {
     char.velocityY = -15;
     lifes = lifes - 1;
   }
   

  // adam.velocityX = adam.velocityX+0.00000001;
 }
}
  //to decrease and increase the Y velocity of yhe character
  char.velocityY = char.velocityY+1.5;
  
  

 if (char.isTouching(coinGroup)) {
    coins = coins+1;
    coinGroup.destroyEach(coinGroup);
  }
if (char.isTouching(enemyGroup)) {
   enemyGroup.destroyEach(enemyGroup);
     lifes = lifes-1;
    char.velocityY = -15;
  }
     if (distance ===1000) {
            platform.setAnimation("plat2");
                 platform.y = 175;
          }
          if (distance ===2000) {
            platform.setAnimation("plat3");
            platform.y = 175;
          }
          if (distance ===3000) {
            platform.setAnimation("plat4");
          }
   if (lifes ===0||distance === 3000) {
      platform.velocityX = 0;
      gameStage = "over";
    }
if (gameStage === "over") {
       
var end = createSprite(200,250);
       end.setAnimation("end");
       end.scale = 1.03;
       end.depth = 40;
        time =time+1;
        coinGroup.velocityX = 0;
        enemyGroup.velocityX = 0;
 if (time === 200) {
          btn1.depth = 20;
  bg.depth= 19;
  logo.depth = 21;
  platform.depth= 0;
  end.depth=0;
  coin1.depth = 0;
  distance.depth = 0;
  lifes.depth = 0;
  char.depth= 0;
  gameStage = "start";
  coino.depth = 0;
  coin22.depth = 0;
  end.depth = 0;
       }
            
  
       
       
     }
     

                 
   
  
 console.log(time);
  drawSprites();
 
   fill("black");
 textSize(30);
  
 if (gameStage ===  "start") {
   text(coins,355,62);
 }
 
  if (gameStage === "play") {
    distance=Math.round(distance+0.5);
    text(distance,205,60);
    text(coins,355,62);
  text("x "+lifes,45,60);
  coin22.depth =0;
  coino.depth = 0;
  spawnCoins ();
  spawnEnemies();
  } 
  
 if (gameStage ==="char") {
   fill("white");
    textSize(35);
    text("Choose your Character",20,145);
    textSize(24);
 
    text("1.Insert the coin in the box",0,35);
    if (coino.isTouching(coin22)) {
      text("Your Lives in game = "+x,0,95);
    }
    
  
  }
   
  


 
}

function spawnCoins (){
  if (World.frameCount%85 ===0) {
    var coin = createSprite(randomNumber(300,375),randomNumber(345,270));
    coin.setAnimation("Coin");
    coin.velocityX = -5;
    coin.lifetime = 135;
    coinGroup.add(coin);
  }
  
}

function spawnEnemies (){
  if (World.frameCount%60 ===0) {
    var enemies = createSprite(400,350);
    var w = randomNumber(1, 4);
    enemies.setAnimation("obstacle"+w);
    enemies.velocityX = -8  ;
    enemies.lifetime = 400/3;
    enemies.scale = 0.3;
    enemies.debug = true;
    enemies.setCollider("rectangle",0,0,50,50);
    enemyGroup.add(enemies);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
