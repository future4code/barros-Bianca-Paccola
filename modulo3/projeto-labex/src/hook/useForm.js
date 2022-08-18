import React, { useState, useEffect } from "react";
import axios from "axios";

export function useForm (state) {
    const [form, setForm] = useState(state)

    function onChange(event) {
        const {name, value} = event.target
        setForm({...form,[name]:value})
      }

      const clear=()=> setForm(state)

      return [form, onChange, clear]
}