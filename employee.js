function employee(name, rank, yearsOfService){
    this.name = name;
    this.rank = rank;
    this.years = yearsOfService;
    this.transport = true;
    this.feeding = true;
    this.gratuityaccess = false;
    if (this.years > 30){
        this.gratuity = false;
    }
    this.rentAllowance = 200000;
    this.smultiplier = 2000;
    this.salary = function(){
    	return this.years * this.smultiplier;
    };
    this.pension_deductible = this.salary() * 0.15;
    this.takehome = this.salary() - this.pension_deductible;
    
    this.promote = function(){
    	this.rank = ''+this.rank+'.promoted';
    	this.smultiplier = this.smultiplier + 1000;
    	//this.salary = this.years * this.smultiplier;
    };
}

function seniormanagement(){
    this.paid_vacation = true;
    this.vacation_allowance = 100000;
    this.takehome = this.salary() - this.pension_deductible + this.vacation_allowance;
    
}    
seniormanagement.prototype = new employee('Olaoluwa Olagunju', 'MD', 34);

var MD = new seniormanagement();



console.log('' +MD.name+ ' has a takehome pay of '+ MD.takehome+ '.has a vacation allowance worth ' +MD.vacation_allowance+ 'and has a rank of ' +MD.rank+ '');

MD.promote();
console.log('' +MD.name+ ' has a takehome pay of '+ MD.takehome+ '.has a vacation allowance worth ' +MD.vacation_allowance+ 'and has a rank of ' +MD.rank+ '');