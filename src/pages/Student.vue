<template>
  <div>
    <div
      class="px-36 bg-gray-100 flex justify-between items-center py-2 mx-auto"
    >
      <h2 class="text-3xl">Students</h2>
      <router-link to="/student/create">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add Student
        </button>
      </router-link>
    </div>
    <div class="px-36 mt-5">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Course</th>
              <th scope="col" class="px-6 py-3">Phone</th>
              <th scope="col" class="px-6 py-3">Created At</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(student, index) in students"
              :key="index"
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ student.id }}
              </th>
              <td class="px-6 py-4">  {{ student.name }}</td>
              <td class="px-6 py-4">  {{ student.email }}</td>
              <td class="px-6 py-4">  {{ student.course }}</td>
              <td class="px-6 py-4">  {{ student.phone }}</td>
              <td class="px-6 py-4">  {{ student.created_at }}</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const students = ref([]);

const getStudents = () => {
  axios
    .get("/data.json")
    .then((res) => {
      students.value = res.data.students; // Assuming the JSON response has the students array
      console.log(students.value);
    })
    .catch((error) => {
      console.error("Error fetching students:", error);
    });
};

onMounted(() => {
  getStudents();
});
</script>

<style scoped></style>
