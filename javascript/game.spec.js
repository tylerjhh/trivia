describe("trivia game", function() {
  const expectedResults = `Chet was added
They are player number 1
Pat was added
They are player number 2
Sue was added
They are player number 3
Chet is the current player
They have rolled a 3
Chet's new location is 3
The category is Rock
Rock Question 0
Answer was correct!!!!
Chet now has 1 Gold Coins.
Pat is the current player
They have rolled a 1
Pat's new location is 1
The category is Science
Science Question 0
Answer was correct!!!!
Pat now has 1 Gold Coins.
Sue is the current player
They have rolled a 2
Sue's new location is 2
The category is Sports
Sports Question 0
Answer was correct!!!!
Sue now has 1 Gold Coins.
Chet is the current player
They have rolled a 2
Chet's new location is 5
The category is Science
Science Question 1
Question was incorrectly answered
Chet was sent to the penalty box
Pat is the current player
They have rolled a 1
Pat's new location is 2
The category is Sports
Sports Question 1
Answer was correct!!!!
Pat now has 2 Gold Coins.
Sue is the current player
They have rolled a 6
Sue's new location is 8
The category is Pop
Pop Question 0
Answer was correct!!!!
Sue now has 2 Gold Coins.
Chet is the current player
They have rolled a 4
Chet is not getting out of the penalty box
Pat is the current player
They have rolled a 1
Pat's new location is 3
The category is Rock
Rock Question 1
Answer was correct!!!!
Pat now has 3 Gold Coins.
Sue is the current player
They have rolled a 2
Sue's new location is 10
The category is Sports
Sports Question 2
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 3
Chet is getting out of the penalty box
Chet's new location is 8
The category is Pop
Pop Question 1
Answer was correct!!!!
Chet now has 2 Gold Coins.
Pat is the current player
They have rolled a 4
Pat's new location is 7
The category is Rock
Rock Question 2
Answer was correct!!!!
Pat now has 4 Gold Coins.
Sue is the current player
They have rolled a 5
Sue is getting out of the penalty box
Sue's new location is 3
The category is Rock
Rock Question 3
Question was incorrectly answered
Sue was sent to the penalty box
Chet is the current player
They have rolled a 3
Chet is getting out of the penalty box
Chet's new location is 11
The category is Rock
Rock Question 4
Answer was correct!!!!
Chet now has 3 Gold Coins.
Pat is the current player
They have rolled a 4
Pat's new location is 11
The category is Rock
Rock Question 5
Answer was correct!!!!
Pat now has 5 Gold Coins.
Sue is the current player
They have rolled a 5
Sue is getting out of the penalty box
Sue's new location is 8
The category is Pop
Pop Question 2
Answer was correct!!!!
Sue now has 3 Gold Coins.
Chet is the current player
They have rolled a 2
Chet is not getting out of the penalty box
Pat is the current player
They have rolled a 1
Pat's new location is 0
The category is Pop
Pop Question 3
Answer was correct!!!!
Pat now has 6 Gold Coins.
`;

  it("yields the expected result", function() {
    const oldRandom = Math.random;
    var index = 0;
    Math.random = () => {
      const randomNumbers = [
        0.37341400308567096,
0.9485644386600074,
0.05586854248163631,
0.5778925937643353,
0.31227705734738076,
0.8026076636569661,
0.24612709764323548,
0.7895926499465566,
0.14589235953798174,
0.44984097607673834,
0.8720024271357449,
0.0004849042977304041,
0.6433088162662497,
0.5897503133339208,
0.0894632510336053,
0.6480777550931196,
0.2530293980954925,
0.799369235315456,
0.481166954749777,
0.5783131287948331,
0.5348004585999662,
0.9956190446466102,
0.7144125406262822,
0.7860037690060253,
0.44458890614007807,
0.4323573218592429,
0.5977804252157497,
0.8434276731209194,
0.7745381038016976,
0.22655703516907888,
0.1851846952335534,
0.23066880442446025,
0.004486928350814212,
0.3991392087317809,
0.9370854538557587,
0.31917653628057074,
0.49315103908544766,
0.6951124213962658,
0.38066301940923175,
0.9298343652228744,
0.9066768173961535,
0.06304884990388016,
0.7500362658067596,
0.15510010327366475,
0.8059191898901765,
0.7351034087111246,
0.6916224674516116,
0.6175378054456693,
0.9752983854667621,
0.6961072485718542,
0.11930028585516994,
0.6136050455589641,
0.5954902302128393,
0.569321224859322,
0.6048571556364875,
0.33929686141493054,
0.7826598902898034,
0.4570342206865239,
0.260038852600577,
0.9138767562728722,
0.09935148900962543,
0.27028390284591786,
0.9936043778484378,
0.37124596740645477,
0.6177112159623468,
0.9896362109339483,
0.49312497548794254,
0.9583731248022573,
0.6860541276618837,
0.8888253837302251,
0.22093992896512282,
0.8058650592734737,
0.22612068761708337,
0.8177826585968555,
0.05192683914055207,
0.6932101759147238,
0.28946804541901927,
0.05220365067703958,
0.14857952357631188,
0.1504677598448052,
0.5303410921627545,
0.5920346038449649,
0.7071163232001265,
0.19082559008510036,
0.7626606556033906,
0.17816744673530716,
0.4812957745009445,
0.768177458109214,
0.23226350773749238,
0.634405895010413,
0.5031666875915386,
0.07897224582930251,
0.2614827725433029,
0.8763657483277718,
0.7217240456587948,
0.300130853571581,
0.5534140438457551,
0.22992086207817186,
0.4306229172753646,
0.11683300558380494,
      ];

      const result = randomNumbers[index];
      index++;
      if (index >= 100) {
        index = 0;
      }
      return result;
    }

    var results = "";
    const oldConsoleLog = console.log;
    console.log = message => {
      oldConsoleLog(message);
      results += `${message}\n`;
    }

    require('./game.js');

    Math.random = oldRandom;

    expect(results).toEqual(expectedResults);
  });
});
