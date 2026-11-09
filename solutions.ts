function multiplyValue(value: number, multiplier?: number) {
  if (typeof multiplier === "number") {
    const result = value * multiplier;
    return result;
  } else {
    const result = value * 2;
    return result;
  }
}

function processInput(
  value: number | string | boolean,
): number | string | boolean | void {
  if (typeof value === "string") {
    const trimmedValue = value.trim();
    const result = trimmedValue.toLowerCase();
    return result;
  } else if (typeof value === "number") {
    const result = value * 10;
    return result;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
}

function formatCoordinate([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const singleArray: T[] = [];
  return singleArray.concat(...arrays);
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number) {
  const result: Course[] = courses.filter((course: Course) => {
    if (course.isPublished === true && course.students >= minStudents) {
      return course;
    } else return;
  });
  return result;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const newArray: T[K][] = items.map((item) => item[key]);
  return newArray;
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  const validateAgePromise = new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
  return validateAgePromise;
}
