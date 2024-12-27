function xl_board_key_cutouts_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-12.5,-88.2],[-12.5,31.05]]).appendPoint([318.4,31.05]).appendPoint([318.4,-88.2]).appendPoint([-12.5,-88.2]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[243.8,-64.15],[257.8,-64.15]]).appendPoint([257.8,-50.15]).appendPoint([243.8,-50.15]).appendPoint([243.8,-64.15]).close().innerToCAG()
.union(
    new CSG.Path2D([[248.55,-45.1],[262.55,-45.1]]).appendPoint([262.55,-31.1]).appendPoint([248.55,-31.1]).appendPoint([248.55,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[117.45,12.05],[131.45,12.05]]).appendPoint([131.45,26.05]).appendPoint([117.45,26.05]).appendPoint([117.45,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.225,12.05],[69.225,12.05]]).appendPoint([69.225,26.05]).appendPoint([55.225,26.05]).appendPoint([55.225,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[298.9,-83.2],[312.9,-83.2]]).appendPoint([312.9,-69.2]).appendPoint([298.9,-69.2]).appendPoint([298.9,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.9,-83.2],[293.9,-83.2]]).appendPoint([293.9,-69.2]).appendPoint([279.9,-69.2]).appendPoint([279.9,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.9,-83.2],[274.9,-83.2]]).appendPoint([274.9,-69.2]).appendPoint([260.9,-69.2]).appendPoint([260.9,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[228.125,-83.2],[242.125,-83.2]]).appendPoint([242.125,-69.2]).appendPoint([228.125,-69.2]).appendPoint([228.125,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[203.9,-83.2],[217.9,-83.2]]).appendPoint([217.9,-69.2]).appendPoint([203.9,-69.2]).appendPoint([203.9,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[132.175,-83.2],[146.175,-83.2]]).appendPoint([146.175,-69.2]).appendPoint([132.175,-69.2]).appendPoint([132.175,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[60.45,-83.2],[74.45,-83.2]]).appendPoint([74.45,-69.2]).appendPoint([60.45,-69.2]).appendPoint([60.45,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[41.45,-83.2],[55.45,-83.2]]).appendPoint([55.45,-69.2]).appendPoint([41.45,-69.2]).appendPoint([41.45,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[22.45,-83.2],[36.45,-83.2]]).appendPoint([36.45,-69.2]).appendPoint([22.45,-69.2]).appendPoint([22.45,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[-1.775,-83.2],[12.225,-83.2]]).appendPoint([12.225,-69.2]).appendPoint([-1.775,-69.2]).appendPoint([-1.775,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.9,-64.15],[293.9,-64.15]]).appendPoint([293.9,-50.15]).appendPoint([279.9,-50.15]).appendPoint([279.9,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.7,-64.15],[221.7,-64.15]]).appendPoint([221.7,-50.15]).appendPoint([207.7,-50.15]).appendPoint([207.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.7,-64.15],[202.7,-64.15]]).appendPoint([202.7,-50.15]).appendPoint([188.7,-50.15]).appendPoint([188.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.7,-64.15],[183.7,-64.15]]).appendPoint([183.7,-50.15]).appendPoint([169.7,-50.15]).appendPoint([169.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.7,-64.15],[164.7,-64.15]]).appendPoint([164.7,-50.15]).appendPoint([150.7,-50.15]).appendPoint([150.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.7,-64.15],[145.7,-64.15]]).appendPoint([145.7,-50.15]).appendPoint([131.7,-50.15]).appendPoint([131.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.7,-64.15],[126.7,-64.15]]).appendPoint([126.7,-50.15]).appendPoint([112.7,-50.15]).appendPoint([112.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.7,-64.15],[107.7,-64.15]]).appendPoint([107.7,-50.15]).appendPoint([93.7,-50.15]).appendPoint([93.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.7,-64.15],[88.7,-64.15]]).appendPoint([88.7,-50.15]).appendPoint([74.7,-50.15]).appendPoint([74.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.7,-64.15],[69.7,-64.15]]).appendPoint([69.7,-50.15]).appendPoint([55.7,-50.15]).appendPoint([55.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.7,-64.15],[50.7,-64.15]]).appendPoint([50.7,-50.15]).appendPoint([36.7,-50.15]).appendPoint([36.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[5.35,-64.15],[19.35,-64.15]]).appendPoint([19.35,-50.15]).appendPoint([5.35,-50.15]).appendPoint([5.35,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[298.9,-45.1],[312.9,-45.1]]).appendPoint([312.9,-31.1]).appendPoint([298.9,-31.1]).appendPoint([298.9,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.9,-45.1],[293.9,-45.1]]).appendPoint([293.9,-31.1]).appendPoint([279.9,-31.1]).appendPoint([279.9,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[217.2,-45.1],[231.2,-45.1]]).appendPoint([231.2,-31.1]).appendPoint([217.2,-31.1]).appendPoint([217.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.2,-45.1],[212.2,-45.1]]).appendPoint([212.2,-31.1]).appendPoint([198.2,-31.1]).appendPoint([198.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[179.2,-45.1],[193.2,-45.1]]).appendPoint([193.2,-31.1]).appendPoint([179.2,-31.1]).appendPoint([179.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[160.2,-45.1],[174.2,-45.1]]).appendPoint([174.2,-31.1]).appendPoint([160.2,-31.1]).appendPoint([160.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[141.2,-45.1],[155.2,-45.1]]).appendPoint([155.2,-31.1]).appendPoint([141.2,-31.1]).appendPoint([141.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[122.2,-45.1],[136.2,-45.1]]).appendPoint([136.2,-31.1]).appendPoint([122.2,-31.1]).appendPoint([122.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.2,-45.1],[117.2,-45.1]]).appendPoint([117.2,-31.1]).appendPoint([103.2,-31.1]).appendPoint([103.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[84.2,-45.1],[98.2,-45.1]]).appendPoint([98.2,-31.1]).appendPoint([84.2,-31.1]).appendPoint([84.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.2,-45.1],[79.2,-45.1]]).appendPoint([79.2,-31.1]).appendPoint([65.2,-31.1]).appendPoint([65.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.2,-45.1],[60.2,-45.1]]).appendPoint([60.2,-31.1]).appendPoint([46.2,-31.1]).appendPoint([46.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[27.2,-45.1],[41.2,-45.1]]).appendPoint([41.2,-31.1]).appendPoint([27.2,-31.1]).appendPoint([27.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[0.6,-45.1],[14.6,-45.1]]).appendPoint([14.6,-31.1]).appendPoint([0.6,-31.1]).appendPoint([0.6,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[255.675,-26.05],[269.675,-26.05]]).appendPoint([269.675,-12.05]).appendPoint([255.675,-12.05]).appendPoint([255.675,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.45,-26.05],[245.45,-26.05]]).appendPoint([245.45,-12.05]).appendPoint([231.45,-12.05]).appendPoint([231.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[212.45,-26.05],[226.45,-26.05]]).appendPoint([226.45,-12.05]).appendPoint([212.45,-12.05]).appendPoint([212.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[193.45,-26.05],[207.45,-26.05]]).appendPoint([207.45,-12.05]).appendPoint([193.45,-12.05]).appendPoint([193.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[174.45,-26.05],[188.45,-26.05]]).appendPoint([188.45,-12.05]).appendPoint([174.45,-12.05]).appendPoint([174.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[155.45,-26.05],[169.45,-26.05]]).appendPoint([169.45,-12.05]).appendPoint([155.45,-12.05]).appendPoint([155.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.45,-26.05],[150.45,-26.05]]).appendPoint([150.45,-12.05]).appendPoint([136.45,-12.05]).appendPoint([136.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[117.45,-26.05],[131.45,-26.05]]).appendPoint([131.45,-12.05]).appendPoint([117.45,-12.05]).appendPoint([117.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[98.45,-26.05],[112.45,-26.05]]).appendPoint([112.45,-12.05]).appendPoint([98.45,-12.05]).appendPoint([98.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.45,-26.05],[93.45,-26.05]]).appendPoint([93.45,-12.05]).appendPoint([79.45,-12.05]).appendPoint([79.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[60.45,-26.05],[74.45,-26.05]]).appendPoint([74.45,-12.05]).appendPoint([60.45,-12.05]).appendPoint([60.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[41.45,-26.05],[55.45,-26.05]]).appendPoint([55.45,-12.05]).appendPoint([41.45,-12.05]).appendPoint([41.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[22.45,-26.05],[36.45,-26.05]]).appendPoint([36.45,-12.05]).appendPoint([22.45,-12.05]).appendPoint([22.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[-1.775,-26.05],[12.225,-26.05]]).appendPoint([12.225,-12.05]).appendPoint([-1.775,-12.05]).appendPoint([-1.775,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.9,12.05],[274.9,12.05]]).appendPoint([274.9,26.05]).appendPoint([260.9,26.05]).appendPoint([260.9,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[236.675,12.05],[250.675,12.05]]).appendPoint([250.675,26.05]).appendPoint([236.675,26.05]).appendPoint([236.675,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[217.675,12.05],[231.675,12.05]]).appendPoint([231.675,26.05]).appendPoint([217.675,26.05]).appendPoint([217.675,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.675,12.05],[212.675,12.05]]).appendPoint([212.675,26.05]).appendPoint([198.675,26.05]).appendPoint([198.675,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[179.675,12.05],[193.675,12.05]]).appendPoint([193.675,26.05]).appendPoint([179.675,26.05]).appendPoint([179.675,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[155.45,12.05],[169.45,12.05]]).appendPoint([169.45,26.05]).appendPoint([155.45,26.05]).appendPoint([155.45,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.45,12.05],[150.45,12.05]]).appendPoint([150.45,26.05]).appendPoint([136.45,26.05]).appendPoint([136.45,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[98.45,12.05],[112.45,12.05]]).appendPoint([112.45,26.05]).appendPoint([98.45,26.05]).appendPoint([98.45,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.225,12.05],[88.225,12.05]]).appendPoint([88.225,26.05]).appendPoint([74.225,26.05]).appendPoint([74.225,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.225,12.05],[50.225,12.05]]).appendPoint([50.225,26.05]).appendPoint([36.225,26.05]).appendPoint([36.225,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[17.225,12.05],[31.225,12.05]]).appendPoint([31.225,26.05]).appendPoint([17.225,26.05]).appendPoint([17.225,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,12.05],[7,12.05]]).appendPoint([7,26.05]).appendPoint([-7,26.05]).appendPoint([-7,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.925,-7],[264.925,-7]]).appendPoint([264.925,7]).appendPoint([250.925,7]).appendPoint([250.925,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.95,-7],[235.95,-7]]).appendPoint([235.95,7]).appendPoint([221.95,7]).appendPoint([221.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.95,-7],[216.95,-7]]).appendPoint([216.95,7]).appendPoint([202.95,7]).appendPoint([202.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.95,-7],[197.95,-7]]).appendPoint([197.95,7]).appendPoint([183.95,7]).appendPoint([183.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.95,-7],[178.95,-7]]).appendPoint([178.95,7]).appendPoint([164.95,7]).appendPoint([164.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.95,-7],[159.95,-7]]).appendPoint([159.95,7]).appendPoint([145.95,7]).appendPoint([145.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.95,-7],[140.95,-7]]).appendPoint([140.95,7]).appendPoint([126.95,7]).appendPoint([126.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[107.95,-7],[121.95,-7]]).appendPoint([121.95,7]).appendPoint([107.95,7]).appendPoint([107.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.95,-7],[102.95,-7]]).appendPoint([102.95,7]).appendPoint([88.95,7]).appendPoint([88.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.95,-7],[83.95,-7]]).appendPoint([83.95,7]).appendPoint([69.95,7]).appendPoint([69.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[50.95,-7],[64.95,-7]]).appendPoint([64.95,7]).appendPoint([50.95,7]).appendPoint([50.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.95,-7],[45.95,-7]]).appendPoint([45.95,7]).appendPoint([31.95,7]).appendPoint([31.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.95,-7],[26.95,-7]]).appendPoint([26.95,7]).appendPoint([12.95,7]).appendPoint([12.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,-7],[7,-7]]).appendPoint([7,7]).appendPoint([-7,7]).appendPoint([-7,-7]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}


function stabilizers_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[173.675,-73.7],[180.675,-73.7]]).appendPoint([180.675,-84.7]).appendPoint([173.675,-84.7]).appendPoint([173.675,-73.7]).close().innerToCAG()
.union(
    new CSG.Path2D([[97.675,-73.7],[104.675,-73.7]]).appendPoint([104.675,-84.7]).appendPoint([97.675,-84.7]).appendPoint([97.675,-73.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[264.05,-35.6],[271.05,-35.6]]).appendPoint([271.05,-46.6]).appendPoint([264.05,-46.6]).appendPoint([264.05,-35.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[247.05,-35.6],[240.05,-35.6]]).appendPoint([240.05,-46.6]).appendPoint([247.05,-46.6]).appendPoint([247.05,-35.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[266.425,2.5],[273.425,2.5]]).appendPoint([273.425,-8.5]).appendPoint([266.425,-8.5]).appendPoint([266.425,2.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[249.425,2.5],[242.425,2.5]]).appendPoint([242.425,-8.5]).appendPoint([249.425,-8.5]).appendPoint([249.425,2.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[259.3,-54.65],[266.3,-54.65]]).appendPoint([266.3,-65.65]).appendPoint([259.3,-65.65]).appendPoint([259.3,-54.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[242.3,-54.65],[235.3,-54.65]]).appendPoint([235.3,-65.65]).appendPoint([242.3,-65.65]).appendPoint([242.3,-54.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[20.85,-54.65],[27.85,-54.65]]).appendPoint([27.85,-65.65]).appendPoint([20.85,-65.65]).appendPoint([20.85,-54.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[3.85,-54.65],[-3.15,-54.65]]).appendPoint([-3.15,-65.65]).appendPoint([3.85,-65.65]).appendPoint([3.85,-54.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[243.8,-64.15],[257.8,-64.15]]).appendPoint([257.8,-50.15]).appendPoint([243.8,-50.15]).appendPoint([243.8,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[248.55,-45.1],[262.55,-45.1]]).appendPoint([262.55,-31.1]).appendPoint([248.55,-31.1]).appendPoint([248.55,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[117.45,12.05],[131.45,12.05]]).appendPoint([131.45,26.05]).appendPoint([117.45,26.05]).appendPoint([117.45,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.225,12.05],[69.225,12.05]]).appendPoint([69.225,26.05]).appendPoint([55.225,26.05]).appendPoint([55.225,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[298.9,-83.2],[312.9,-83.2]]).appendPoint([312.9,-69.2]).appendPoint([298.9,-69.2]).appendPoint([298.9,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.9,-83.2],[293.9,-83.2]]).appendPoint([293.9,-69.2]).appendPoint([279.9,-69.2]).appendPoint([279.9,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.9,-83.2],[274.9,-83.2]]).appendPoint([274.9,-69.2]).appendPoint([260.9,-69.2]).appendPoint([260.9,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[228.125,-83.2],[242.125,-83.2]]).appendPoint([242.125,-69.2]).appendPoint([228.125,-69.2]).appendPoint([228.125,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[203.9,-83.2],[217.9,-83.2]]).appendPoint([217.9,-69.2]).appendPoint([203.9,-69.2]).appendPoint([203.9,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[132.175,-83.2],[146.175,-83.2]]).appendPoint([146.175,-69.2]).appendPoint([132.175,-69.2]).appendPoint([132.175,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[60.45,-83.2],[74.45,-83.2]]).appendPoint([74.45,-69.2]).appendPoint([60.45,-69.2]).appendPoint([60.45,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[41.45,-83.2],[55.45,-83.2]]).appendPoint([55.45,-69.2]).appendPoint([41.45,-69.2]).appendPoint([41.45,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[22.45,-83.2],[36.45,-83.2]]).appendPoint([36.45,-69.2]).appendPoint([22.45,-69.2]).appendPoint([22.45,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[-1.775,-83.2],[12.225,-83.2]]).appendPoint([12.225,-69.2]).appendPoint([-1.775,-69.2]).appendPoint([-1.775,-83.2]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.9,-64.15],[293.9,-64.15]]).appendPoint([293.9,-50.15]).appendPoint([279.9,-50.15]).appendPoint([279.9,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.7,-64.15],[221.7,-64.15]]).appendPoint([221.7,-50.15]).appendPoint([207.7,-50.15]).appendPoint([207.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.7,-64.15],[202.7,-64.15]]).appendPoint([202.7,-50.15]).appendPoint([188.7,-50.15]).appendPoint([188.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.7,-64.15],[183.7,-64.15]]).appendPoint([183.7,-50.15]).appendPoint([169.7,-50.15]).appendPoint([169.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.7,-64.15],[164.7,-64.15]]).appendPoint([164.7,-50.15]).appendPoint([150.7,-50.15]).appendPoint([150.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.7,-64.15],[145.7,-64.15]]).appendPoint([145.7,-50.15]).appendPoint([131.7,-50.15]).appendPoint([131.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.7,-64.15],[126.7,-64.15]]).appendPoint([126.7,-50.15]).appendPoint([112.7,-50.15]).appendPoint([112.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.7,-64.15],[107.7,-64.15]]).appendPoint([107.7,-50.15]).appendPoint([93.7,-50.15]).appendPoint([93.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.7,-64.15],[88.7,-64.15]]).appendPoint([88.7,-50.15]).appendPoint([74.7,-50.15]).appendPoint([74.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.7,-64.15],[69.7,-64.15]]).appendPoint([69.7,-50.15]).appendPoint([55.7,-50.15]).appendPoint([55.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.7,-64.15],[50.7,-64.15]]).appendPoint([50.7,-50.15]).appendPoint([36.7,-50.15]).appendPoint([36.7,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[5.35,-64.15],[19.35,-64.15]]).appendPoint([19.35,-50.15]).appendPoint([5.35,-50.15]).appendPoint([5.35,-64.15]).close().innerToCAG()
).union(
    new CSG.Path2D([[298.9,-45.1],[312.9,-45.1]]).appendPoint([312.9,-31.1]).appendPoint([298.9,-31.1]).appendPoint([298.9,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.9,-45.1],[293.9,-45.1]]).appendPoint([293.9,-31.1]).appendPoint([279.9,-31.1]).appendPoint([279.9,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[217.2,-45.1],[231.2,-45.1]]).appendPoint([231.2,-31.1]).appendPoint([217.2,-31.1]).appendPoint([217.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.2,-45.1],[212.2,-45.1]]).appendPoint([212.2,-31.1]).appendPoint([198.2,-31.1]).appendPoint([198.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[179.2,-45.1],[193.2,-45.1]]).appendPoint([193.2,-31.1]).appendPoint([179.2,-31.1]).appendPoint([179.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[160.2,-45.1],[174.2,-45.1]]).appendPoint([174.2,-31.1]).appendPoint([160.2,-31.1]).appendPoint([160.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[141.2,-45.1],[155.2,-45.1]]).appendPoint([155.2,-31.1]).appendPoint([141.2,-31.1]).appendPoint([141.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[122.2,-45.1],[136.2,-45.1]]).appendPoint([136.2,-31.1]).appendPoint([122.2,-31.1]).appendPoint([122.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.2,-45.1],[117.2,-45.1]]).appendPoint([117.2,-31.1]).appendPoint([103.2,-31.1]).appendPoint([103.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[84.2,-45.1],[98.2,-45.1]]).appendPoint([98.2,-31.1]).appendPoint([84.2,-31.1]).appendPoint([84.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.2,-45.1],[79.2,-45.1]]).appendPoint([79.2,-31.1]).appendPoint([65.2,-31.1]).appendPoint([65.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.2,-45.1],[60.2,-45.1]]).appendPoint([60.2,-31.1]).appendPoint([46.2,-31.1]).appendPoint([46.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[27.2,-45.1],[41.2,-45.1]]).appendPoint([41.2,-31.1]).appendPoint([27.2,-31.1]).appendPoint([27.2,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[0.6,-45.1],[14.6,-45.1]]).appendPoint([14.6,-31.1]).appendPoint([0.6,-31.1]).appendPoint([0.6,-45.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[255.675,-26.05],[269.675,-26.05]]).appendPoint([269.675,-12.05]).appendPoint([255.675,-12.05]).appendPoint([255.675,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.45,-26.05],[245.45,-26.05]]).appendPoint([245.45,-12.05]).appendPoint([231.45,-12.05]).appendPoint([231.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[212.45,-26.05],[226.45,-26.05]]).appendPoint([226.45,-12.05]).appendPoint([212.45,-12.05]).appendPoint([212.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[193.45,-26.05],[207.45,-26.05]]).appendPoint([207.45,-12.05]).appendPoint([193.45,-12.05]).appendPoint([193.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[174.45,-26.05],[188.45,-26.05]]).appendPoint([188.45,-12.05]).appendPoint([174.45,-12.05]).appendPoint([174.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[155.45,-26.05],[169.45,-26.05]]).appendPoint([169.45,-12.05]).appendPoint([155.45,-12.05]).appendPoint([155.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.45,-26.05],[150.45,-26.05]]).appendPoint([150.45,-12.05]).appendPoint([136.45,-12.05]).appendPoint([136.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[117.45,-26.05],[131.45,-26.05]]).appendPoint([131.45,-12.05]).appendPoint([117.45,-12.05]).appendPoint([117.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[98.45,-26.05],[112.45,-26.05]]).appendPoint([112.45,-12.05]).appendPoint([98.45,-12.05]).appendPoint([98.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.45,-26.05],[93.45,-26.05]]).appendPoint([93.45,-12.05]).appendPoint([79.45,-12.05]).appendPoint([79.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[60.45,-26.05],[74.45,-26.05]]).appendPoint([74.45,-12.05]).appendPoint([60.45,-12.05]).appendPoint([60.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[41.45,-26.05],[55.45,-26.05]]).appendPoint([55.45,-12.05]).appendPoint([41.45,-12.05]).appendPoint([41.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[22.45,-26.05],[36.45,-26.05]]).appendPoint([36.45,-12.05]).appendPoint([22.45,-12.05]).appendPoint([22.45,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[-1.775,-26.05],[12.225,-26.05]]).appendPoint([12.225,-12.05]).appendPoint([-1.775,-12.05]).appendPoint([-1.775,-26.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.9,12.05],[274.9,12.05]]).appendPoint([274.9,26.05]).appendPoint([260.9,26.05]).appendPoint([260.9,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[236.675,12.05],[250.675,12.05]]).appendPoint([250.675,26.05]).appendPoint([236.675,26.05]).appendPoint([236.675,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[217.675,12.05],[231.675,12.05]]).appendPoint([231.675,26.05]).appendPoint([217.675,26.05]).appendPoint([217.675,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.675,12.05],[212.675,12.05]]).appendPoint([212.675,26.05]).appendPoint([198.675,26.05]).appendPoint([198.675,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[179.675,12.05],[193.675,12.05]]).appendPoint([193.675,26.05]).appendPoint([179.675,26.05]).appendPoint([179.675,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[155.45,12.05],[169.45,12.05]]).appendPoint([169.45,26.05]).appendPoint([155.45,26.05]).appendPoint([155.45,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[136.45,12.05],[150.45,12.05]]).appendPoint([150.45,26.05]).appendPoint([136.45,26.05]).appendPoint([136.45,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[98.45,12.05],[112.45,12.05]]).appendPoint([112.45,26.05]).appendPoint([98.45,26.05]).appendPoint([98.45,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.225,12.05],[88.225,12.05]]).appendPoint([88.225,26.05]).appendPoint([74.225,26.05]).appendPoint([74.225,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.225,12.05],[50.225,12.05]]).appendPoint([50.225,26.05]).appendPoint([36.225,26.05]).appendPoint([36.225,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[17.225,12.05],[31.225,12.05]]).appendPoint([31.225,26.05]).appendPoint([17.225,26.05]).appendPoint([17.225,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,12.05],[7,12.05]]).appendPoint([7,26.05]).appendPoint([-7,26.05]).appendPoint([-7,12.05]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.925,-7],[264.925,-7]]).appendPoint([264.925,7]).appendPoint([250.925,7]).appendPoint([250.925,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.95,-7],[235.95,-7]]).appendPoint([235.95,7]).appendPoint([221.95,7]).appendPoint([221.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.95,-7],[216.95,-7]]).appendPoint([216.95,7]).appendPoint([202.95,7]).appendPoint([202.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.95,-7],[197.95,-7]]).appendPoint([197.95,7]).appendPoint([183.95,7]).appendPoint([183.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.95,-7],[178.95,-7]]).appendPoint([178.95,7]).appendPoint([164.95,7]).appendPoint([164.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.95,-7],[159.95,-7]]).appendPoint([159.95,7]).appendPoint([145.95,7]).appendPoint([145.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.95,-7],[140.95,-7]]).appendPoint([140.95,7]).appendPoint([126.95,7]).appendPoint([126.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[107.95,-7],[121.95,-7]]).appendPoint([121.95,7]).appendPoint([107.95,7]).appendPoint([107.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.95,-7],[102.95,-7]]).appendPoint([102.95,7]).appendPoint([88.95,7]).appendPoint([88.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.95,-7],[83.95,-7]]).appendPoint([83.95,7]).appendPoint([69.95,7]).appendPoint([69.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[50.95,-7],[64.95,-7]]).appendPoint([64.95,7]).appendPoint([50.95,7]).appendPoint([50.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.95,-7],[45.95,-7]]).appendPoint([45.95,7]).appendPoint([31.95,7]).appendPoint([31.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.95,-7],[26.95,-7]]).appendPoint([26.95,7]).appendPoint([12.95,7]).appendPoint([12.95,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,-7],[7,-7]]).appendPoint([7,7]).appendPoint([-7,7]).appendPoint([-7,-7]).close().innerToCAG()
).extrude({ offset: [0, 0, 1.2] });
}




                function key_plate_case_fn() {
                    

                // creating part 0 of case key_plate
                let key_plate__part_0 = xl_board_key_cutouts_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let key_plate__part_0_bounds = key_plate__part_0.getBounds();
                let key_plate__part_0_x = key_plate__part_0_bounds[0].x + (key_plate__part_0_bounds[1].x - key_plate__part_0_bounds[0].x) / 2
                let key_plate__part_0_y = key_plate__part_0_bounds[0].y + (key_plate__part_0_bounds[1].y - key_plate__part_0_bounds[0].y) / 2
                key_plate__part_0 = translate([-key_plate__part_0_x, -key_plate__part_0_y, 0], key_plate__part_0);
                key_plate__part_0 = rotate([0,0,0], key_plate__part_0);
                key_plate__part_0 = translate([key_plate__part_0_x, key_plate__part_0_y, 0], key_plate__part_0);

                key_plate__part_0 = translate([0,0,0], key_plate__part_0);
                let result = key_plate__part_0;
                
            
                    return result;
                }
            
            

                function stabilizers_plate_case_fn() {
                    

                // creating part 0 of case stabilizers_plate
                let stabilizers_plate__part_0 = stabilizers_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let stabilizers_plate__part_0_bounds = stabilizers_plate__part_0.getBounds();
                let stabilizers_plate__part_0_x = stabilizers_plate__part_0_bounds[0].x + (stabilizers_plate__part_0_bounds[1].x - stabilizers_plate__part_0_bounds[0].x) / 2
                let stabilizers_plate__part_0_y = stabilizers_plate__part_0_bounds[0].y + (stabilizers_plate__part_0_bounds[1].y - stabilizers_plate__part_0_bounds[0].y) / 2
                stabilizers_plate__part_0 = translate([-stabilizers_plate__part_0_x, -stabilizers_plate__part_0_y, 0], stabilizers_plate__part_0);
                stabilizers_plate__part_0 = rotate([0,0,0], stabilizers_plate__part_0);
                stabilizers_plate__part_0 = translate([stabilizers_plate__part_0_x, stabilizers_plate__part_0_y, 0], stabilizers_plate__part_0);

                stabilizers_plate__part_0 = translate([0,0,0], stabilizers_plate__part_0);
                let result = stabilizers_plate__part_0;
                
            
                    return result;
                }
            
            

                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = key_plate_case_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            

                // creating part 1 of case plate
                let plate__part_1 = stabilizers_plate_case_fn();

                // make sure that rotations are relative
                let plate__part_1_bounds = plate__part_1.getBounds();
                let plate__part_1_x = plate__part_1_bounds[0].x + (plate__part_1_bounds[1].x - plate__part_1_bounds[0].x) / 2
                let plate__part_1_y = plate__part_1_bounds[0].y + (plate__part_1_bounds[1].y - plate__part_1_bounds[0].y) / 2
                plate__part_1 = translate([-plate__part_1_x, -plate__part_1_y, 0], plate__part_1);
                plate__part_1 = rotate([0,0,0], plate__part_1);
                plate__part_1 = translate([plate__part_1_x, plate__part_1_y, 0], plate__part_1);

                plate__part_1 = translate([0,0,0], plate__part_1);
                result = result.subtract(plate__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        