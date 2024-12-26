function xl_board_key_cutouts_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-12.5,-88.2],[-12.5,31.05]]).appendPoint([318.4,31.05]).appendPoint([318.4,-88.2]).appendPoint([-12.5,-88.2]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[243.3,-64.65],[258.3,-64.65]]).appendPoint([258.3,-49.65]).appendPoint([243.3,-49.65]).appendPoint([243.3,-64.65]).close().innerToCAG()
.union(
    new CSG.Path2D([[248.05,-45.6],[263.05,-45.6]]).appendPoint([263.05,-30.6]).appendPoint([248.05,-30.6]).appendPoint([248.05,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[116.95,11.55],[131.95,11.55]]).appendPoint([131.95,26.55]).appendPoint([116.95,26.55]).appendPoint([116.95,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[54.725,11.55],[69.725,11.55]]).appendPoint([69.725,26.55]).appendPoint([54.725,26.55]).appendPoint([54.725,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[298.4,-83.7],[313.4,-83.7]]).appendPoint([313.4,-68.7]).appendPoint([298.4,-68.7]).appendPoint([298.4,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.4,-83.7],[294.4,-83.7]]).appendPoint([294.4,-68.7]).appendPoint([279.4,-68.7]).appendPoint([279.4,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.4,-83.7],[275.4,-83.7]]).appendPoint([275.4,-68.7]).appendPoint([260.4,-68.7]).appendPoint([260.4,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[227.625,-83.7],[242.625,-83.7]]).appendPoint([242.625,-68.7]).appendPoint([227.625,-68.7]).appendPoint([227.625,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[203.4,-83.7],[218.4,-83.7]]).appendPoint([218.4,-68.7]).appendPoint([203.4,-68.7]).appendPoint([203.4,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.675,-83.7],[146.675,-83.7]]).appendPoint([146.675,-68.7]).appendPoint([131.675,-68.7]).appendPoint([131.675,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[59.95,-83.7],[74.95,-83.7]]).appendPoint([74.95,-68.7]).appendPoint([59.95,-68.7]).appendPoint([59.95,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[40.95,-83.7],[55.95,-83.7]]).appendPoint([55.95,-68.7]).appendPoint([40.95,-68.7]).appendPoint([40.95,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[21.95,-83.7],[36.95,-83.7]]).appendPoint([36.95,-68.7]).appendPoint([21.95,-68.7]).appendPoint([21.95,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[-2.275,-83.7],[12.725,-83.7]]).appendPoint([12.725,-68.7]).appendPoint([-2.275,-68.7]).appendPoint([-2.275,-83.7]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.4,-64.65],[294.4,-64.65]]).appendPoint([294.4,-49.65]).appendPoint([279.4,-49.65]).appendPoint([279.4,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.2,-64.65],[222.2,-64.65]]).appendPoint([222.2,-49.65]).appendPoint([207.2,-49.65]).appendPoint([207.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.2,-64.65],[203.2,-64.65]]).appendPoint([203.2,-49.65]).appendPoint([188.2,-49.65]).appendPoint([188.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.2,-64.65],[184.2,-64.65]]).appendPoint([184.2,-49.65]).appendPoint([169.2,-49.65]).appendPoint([169.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.2,-64.65],[165.2,-64.65]]).appendPoint([165.2,-49.65]).appendPoint([150.2,-49.65]).appendPoint([150.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.2,-64.65],[146.2,-64.65]]).appendPoint([146.2,-49.65]).appendPoint([131.2,-49.65]).appendPoint([131.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.2,-64.65],[127.2,-64.65]]).appendPoint([127.2,-49.65]).appendPoint([112.2,-49.65]).appendPoint([112.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.2,-64.65],[108.2,-64.65]]).appendPoint([108.2,-49.65]).appendPoint([93.2,-49.65]).appendPoint([93.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.2,-64.65],[89.2,-64.65]]).appendPoint([89.2,-49.65]).appendPoint([74.2,-49.65]).appendPoint([74.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[55.2,-64.65],[70.2,-64.65]]).appendPoint([70.2,-49.65]).appendPoint([55.2,-49.65]).appendPoint([55.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[36.2,-64.65],[51.2,-64.65]]).appendPoint([51.2,-49.65]).appendPoint([36.2,-49.65]).appendPoint([36.2,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[4.85,-64.65],[19.85,-64.65]]).appendPoint([19.85,-49.65]).appendPoint([4.85,-49.65]).appendPoint([4.85,-64.65]).close().innerToCAG()
).union(
    new CSG.Path2D([[298.4,-45.6],[313.4,-45.6]]).appendPoint([313.4,-30.6]).appendPoint([298.4,-30.6]).appendPoint([298.4,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[279.4,-45.6],[294.4,-45.6]]).appendPoint([294.4,-30.6]).appendPoint([279.4,-30.6]).appendPoint([279.4,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[216.7,-45.6],[231.7,-45.6]]).appendPoint([231.7,-30.6]).appendPoint([216.7,-30.6]).appendPoint([216.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[197.7,-45.6],[212.7,-45.6]]).appendPoint([212.7,-30.6]).appendPoint([197.7,-30.6]).appendPoint([197.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[178.7,-45.6],[193.7,-45.6]]).appendPoint([193.7,-30.6]).appendPoint([178.7,-30.6]).appendPoint([178.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[159.7,-45.6],[174.7,-45.6]]).appendPoint([174.7,-30.6]).appendPoint([159.7,-30.6]).appendPoint([159.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.7,-45.6],[155.7,-45.6]]).appendPoint([155.7,-30.6]).appendPoint([140.7,-30.6]).appendPoint([140.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[121.7,-45.6],[136.7,-45.6]]).appendPoint([136.7,-30.6]).appendPoint([121.7,-30.6]).appendPoint([121.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[102.7,-45.6],[117.7,-45.6]]).appendPoint([117.7,-30.6]).appendPoint([102.7,-30.6]).appendPoint([102.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.7,-45.6],[98.7,-45.6]]).appendPoint([98.7,-30.6]).appendPoint([83.7,-30.6]).appendPoint([83.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[64.7,-45.6],[79.7,-45.6]]).appendPoint([79.7,-30.6]).appendPoint([64.7,-30.6]).appendPoint([64.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[45.7,-45.6],[60.7,-45.6]]).appendPoint([60.7,-30.6]).appendPoint([45.7,-30.6]).appendPoint([45.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[26.7,-45.6],[41.7,-45.6]]).appendPoint([41.7,-30.6]).appendPoint([26.7,-30.6]).appendPoint([26.7,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[0.1,-45.6],[15.1,-45.6]]).appendPoint([15.1,-30.6]).appendPoint([0.1,-30.6]).appendPoint([0.1,-45.6]).close().innerToCAG()
).union(
    new CSG.Path2D([[255.175,-26.55],[270.175,-26.55]]).appendPoint([270.175,-11.55]).appendPoint([255.175,-11.55]).appendPoint([255.175,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[230.95,-26.55],[245.95,-26.55]]).appendPoint([245.95,-11.55]).appendPoint([230.95,-11.55]).appendPoint([230.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[211.95,-26.55],[226.95,-26.55]]).appendPoint([226.95,-11.55]).appendPoint([211.95,-11.55]).appendPoint([211.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.95,-26.55],[207.95,-26.55]]).appendPoint([207.95,-11.55]).appendPoint([192.95,-11.55]).appendPoint([192.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[173.95,-26.55],[188.95,-26.55]]).appendPoint([188.95,-11.55]).appendPoint([173.95,-11.55]).appendPoint([173.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[154.95,-26.55],[169.95,-26.55]]).appendPoint([169.95,-11.55]).appendPoint([154.95,-11.55]).appendPoint([154.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[135.95,-26.55],[150.95,-26.55]]).appendPoint([150.95,-11.55]).appendPoint([135.95,-11.55]).appendPoint([135.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[116.95,-26.55],[131.95,-26.55]]).appendPoint([131.95,-11.55]).appendPoint([116.95,-11.55]).appendPoint([116.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.95,-26.55],[112.95,-26.55]]).appendPoint([112.95,-11.55]).appendPoint([97.95,-11.55]).appendPoint([97.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[78.95,-26.55],[93.95,-26.55]]).appendPoint([93.95,-11.55]).appendPoint([78.95,-11.55]).appendPoint([78.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[59.95,-26.55],[74.95,-26.55]]).appendPoint([74.95,-11.55]).appendPoint([59.95,-11.55]).appendPoint([59.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[40.95,-26.55],[55.95,-26.55]]).appendPoint([55.95,-11.55]).appendPoint([40.95,-11.55]).appendPoint([40.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[21.95,-26.55],[36.95,-26.55]]).appendPoint([36.95,-11.55]).appendPoint([21.95,-11.55]).appendPoint([21.95,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[-2.275,-26.55],[12.725,-26.55]]).appendPoint([12.725,-11.55]).appendPoint([-2.275,-11.55]).appendPoint([-2.275,-26.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.4,11.55],[275.4,11.55]]).appendPoint([275.4,26.55]).appendPoint([260.4,26.55]).appendPoint([260.4,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[236.175,11.55],[251.175,11.55]]).appendPoint([251.175,26.55]).appendPoint([236.175,26.55]).appendPoint([236.175,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[217.175,11.55],[232.175,11.55]]).appendPoint([232.175,26.55]).appendPoint([217.175,26.55]).appendPoint([217.175,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.175,11.55],[213.175,11.55]]).appendPoint([213.175,26.55]).appendPoint([198.175,26.55]).appendPoint([198.175,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[179.175,11.55],[194.175,11.55]]).appendPoint([194.175,26.55]).appendPoint([179.175,26.55]).appendPoint([179.175,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[154.95,11.55],[169.95,11.55]]).appendPoint([169.95,26.55]).appendPoint([154.95,26.55]).appendPoint([154.95,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[135.95,11.55],[150.95,11.55]]).appendPoint([150.95,26.55]).appendPoint([135.95,26.55]).appendPoint([135.95,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.95,11.55],[112.95,11.55]]).appendPoint([112.95,26.55]).appendPoint([97.95,26.55]).appendPoint([97.95,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[73.725,11.55],[88.725,11.55]]).appendPoint([88.725,26.55]).appendPoint([73.725,26.55]).appendPoint([73.725,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[35.725,11.55],[50.725,11.55]]).appendPoint([50.725,26.55]).appendPoint([35.725,26.55]).appendPoint([35.725,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[16.725,11.55],[31.725,11.55]]).appendPoint([31.725,26.55]).appendPoint([16.725,26.55]).appendPoint([16.725,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,11.55],[7.5,11.55]]).appendPoint([7.5,26.55]).appendPoint([-7.5,26.55]).appendPoint([-7.5,11.55]).close().innerToCAG()
).union(
    new CSG.Path2D([[250.425,-7.5],[265.425,-7.5]]).appendPoint([265.425,7.5]).appendPoint([250.425,7.5]).appendPoint([250.425,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.45,-7.5],[236.45,-7.5]]).appendPoint([236.45,7.5]).appendPoint([221.45,7.5]).appendPoint([221.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.45,-7.5],[217.45,-7.5]]).appendPoint([217.45,7.5]).appendPoint([202.45,7.5]).appendPoint([202.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.45,-7.5],[198.45,-7.5]]).appendPoint([198.45,7.5]).appendPoint([183.45,7.5]).appendPoint([183.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.45,-7.5],[179.45,-7.5]]).appendPoint([179.45,7.5]).appendPoint([164.45,7.5]).appendPoint([164.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.45,-7.5],[160.45,-7.5]]).appendPoint([160.45,7.5]).appendPoint([145.45,7.5]).appendPoint([145.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.45,-7.5],[141.45,-7.5]]).appendPoint([141.45,7.5]).appendPoint([126.45,7.5]).appendPoint([126.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[107.45,-7.5],[122.45,-7.5]]).appendPoint([122.45,7.5]).appendPoint([107.45,7.5]).appendPoint([107.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[88.45,-7.5],[103.45,-7.5]]).appendPoint([103.45,7.5]).appendPoint([88.45,7.5]).appendPoint([88.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[69.45,-7.5],[84.45,-7.5]]).appendPoint([84.45,7.5]).appendPoint([69.45,7.5]).appendPoint([69.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[50.45,-7.5],[65.45,-7.5]]).appendPoint([65.45,7.5]).appendPoint([50.45,7.5]).appendPoint([50.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.45,-7.5],[46.45,-7.5]]).appendPoint([46.45,7.5]).appendPoint([31.45,7.5]).appendPoint([31.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[12.45,-7.5],[27.45,-7.5]]).appendPoint([27.45,7.5]).appendPoint([12.45,7.5]).appendPoint([12.45,-7.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,-7.5],[7.5,-7.5]]).appendPoint([7.5,7.5]).appendPoint([-7.5,7.5]).appendPoint([-7.5,-7.5]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = xl_board_key_cutouts_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        